export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { name, email, subject, message } = req.body || {};

  // Server-side validation
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return res.status(400).json({ error: 'Please enter a valid name (at least 2 characters).' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    return res.status(400).json({ error: 'Please enter a message with at least 10 characters.' });
  }

  const payload = {
    access_key: 'c9579146-151c-46b5-aeff-93865679505c',
    name: name.trim(),
    email: email.trim(),
    subject: subject && subject.trim() ? subject.trim() : `Portfolio Contact from ${name.trim()}`,
    message: message.trim(),
    from_name: `${name.trim()} (Portfolio)`,
  };

  // Log incoming message to server terminal for instant local developer visibility
  console.log('[PORTFOLIO INBOX]: New message received', {
    name: payload.name,
    email: payload.email,
    subject: payload.subject,
    timestamp: new Date().toISOString(),
  });

  try {
    // Forward message to Web3Forms delivery service with an 8-second timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const remoteResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    clearTimeout(timeoutId);

    const data = await remoteResponse.json().catch(() => ({}));

    // Check if Web3Forms returned an error
    if (!remoteResponse.ok || data.success === false || data.success === 'false') {
      console.warn('[PORTFOLIO INBOX]: Web3Forms response issue:', remoteResponse.status, data);
      return res.status(remoteResponse.status || 400).json({
        success: false,
        error:
          data.message ||
          'External mail delivery service is temporarily unreachable. Please click "Send via Email Client" below or email danielchibundunweze@gmail.com directly.',
      });
    }

    return res.status(200).json({
      success: true,
      message: data.message || 'Your message has been sent successfully.',
      remote: data,
    });
  } catch (error) {
    console.warn('[PORTFOLIO INBOX]: Remote delivery exception:', error.message);
    return res.status(503).json({
      success: false,
      error:
        'Network error contacting the mail service. Please use the "Send via Email Client" button below or reach out directly to danielchibundunweze@gmail.com.',
    });
  }
}
