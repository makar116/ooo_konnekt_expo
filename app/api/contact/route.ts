import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Все поля обязательны для заполнения" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Некорректный формат email" },
        { status: 400 }
      )
    }

    // Configure SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: "konnekt_expo@mail.ru",
      subject: `Новая заявка на консультацию от ${name}`,
      html: `
        <h2>Новая заявка на консультацию</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Сообщение:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      text: `
Новая заявка на консультацию

Имя: ${name}
Email: ${email}
Телефон: ${phone}

Сообщение:
${message}
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: "Сообщение успешно отправлено" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Ошибка при отправке сообщения" },
      { status: 500 }
    )
  }
}

