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
    // Forward message to FormSubmit delivery service for Daniel
    const remoteResponse = await fetch('https://formsubmit.co/ajax/danielchibundunweze@gmail.com', {
      method: 'POST',
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

    const data = await remoteResponse.json();
    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully.',
      remote: data,
    });
  } catch (error) {
    // If external delivery service is temporarily unreachable, message was still recorded on server
    console.warn('[PORTFOLIO INBOX]: Remote delivery service offline, message recorded locally.');
    return res.status(200).json({
      success: true,
      message: 'Your message has been received successfully.',
    });
  }
}
