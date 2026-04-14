import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <noreply@pelaizilua.resend.app>',
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#00d4ff;">New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border-color:#333;margin:24px 0;" />
          <p style="white-space:pre-wrap;">${message}</p>
        </div>
      `,
    })

    if (error) {
      console.error('[Resend error]', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    console.log('[Resend success] email id:', data?.id)
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Contact route error]', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
