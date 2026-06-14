import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { personalInfo } from "@/data/portfolio";

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
}

const requiredEnvVars = ["MAIL_USER", "MAIL_APP_PASSWORD"] as const;

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const missingEnvVar = requiredEnvVars.find((key) => !process.env[key]);
    if (missingEnvVar) {
      return NextResponse.json(
        { error: `Missing email configuration: ${missingEnvVar}` },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_APP_PASSWORD,
      },
    });

    const recipient = process.env.CONTACT_TO_EMAIL || personalInfo.email;

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.MAIL_USER}>`,
      to: recipient,
      replyTo: email,
      subject: `Portfolio Contact from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New portfolio message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to send email right now." },
      { status: 500 }
    );
  }
}
