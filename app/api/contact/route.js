const RECIPIENT = 'asrarulhaqpx@gmail.com';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const project = typeof body.project === 'string' ? body.project.trim() : '';

  if (!name || !email || !project) {
    return Response.json({ error: 'Name, email, and message are required.' }, { status: 400 });
  }
  if (name.length > 200 || email.length > 200 || project.length > 5000) {
    return Response.json({ error: 'One of the fields is too long.' }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set.');
    return Response.json({ error: 'Email service is not configured.' }, { status: 500 });
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Philosophical <onboarding@resend.dev>',
      to: [RECIPIENT],
      reply_to: email,
      subject: `New message from ${name} via Philosophical`,
      text: `Name: ${name}\nEmail: ${email}\n\n${project}`,
    }),
  });

  if (!res.ok) {
    console.error('Resend request failed:', res.status, await res.text());
    return Response.json({ error: 'Failed to send message.' }, { status: 502 });
  }

  return Response.json({ ok: true });
}
