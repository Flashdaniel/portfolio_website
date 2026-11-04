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
    name: name.trim(),
    email: email.trim(),
    subject: subject && subject.trim() ? subject.trim() : 'Portfolio Contact Message',
    message: message.trim(),
  };

  // Log incoming message to server terminal for instant local developer visibility
  console.log('[PORTFOLIO INBOX]: New message received', {
    ...payload,
    timestamp: new Date().toISOString(),
  });

  try {
    // Forward message to FormSubmit delivery service for Daniel with an 8-second timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const remoteResponse = await fetch('https://formsubmit.co/ajax/danielchibundunweze@gmail.com', {
      method: 'POST',
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': req.headers.origin || 'http://localhost:3000',
        'Referer': req.headers.referer || 'http://localhost:3000',
      },
      body: JSON.stringify({
        ...payload,
        _captcha: 'false',
        _template: 'table',
      }),
    });
    clearTimeout(timeoutId);

    const data = await remoteResponse.json().catch(() => ({}));

    // If FormSubmit returns a non-200 code or Cloudflare 522
    if (!remoteResponse.ok) {
      console.warn('[PORTFOLIO INBOX]: Remote relay HTTP', remoteResponse.status, data);
      return res.status(502).json({
        success: false,
        error:
          'External mail delivery service is temporarily unreachable (HTTP ' +
          remoteResponse.status +
          '). Please click "Send via Email Client" below or email danielchibundunweze@gmail.com directly.',
      });
    }

    // Check if FormSubmit requires activation
    if (data.success === false || data.success === 'false') {
      const msg = typeof data.message === 'string' ? data.message : '';
      if (msg.toLowerCase().includes('activat')) {
        return res.status(403).json({
          success: false,
          error:
            'FormSubmit requires one-time email activation. An activation email was sent to danielchibundunweze@gmail.com. Please check your Gmail Spam/Junk/Promotions folder and click "Activate Form".',
        });
      }
      return res.status(400).json({
        success: false,
        error: msg || 'Unable to deliver message through relay service.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully.',
      remote: data,
    });
  } catch (error) {
    console.warn('[PORTFOLIO INBOX]: Remote delivery exception:', error.message);
    return res.status(503).json({
      success: false,
      error:
        'Network error contacting the mail relay. Please use the "Send via Email Client" button below or reach out directly to danielchibundunweze@gmail.com.',
    });
  }
}
