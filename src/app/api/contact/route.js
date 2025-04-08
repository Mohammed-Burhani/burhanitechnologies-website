// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

async function sendEmail(mailOptions) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { error: "Error sending email" };
  }
}

export async function POST(request) {
  try {
    const formData = await request.json();
    const {
      name,
      email,
      contactNumber,
      companyWebsite,
      challenge,
      desc,
      services,
    } = formData;

    // Email to admin
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: "New Business Inquiry Form Submission",
      text: `
Name: ${name}
Email: ${email}
Contact Number: ${contactNumber}
Company Website: ${companyWebsite}
Challenge: ${challenge}
Description: ${desc}
Services Requested: ${services.join(", ")}
      `,
    };

    // Confirmation email to the client
    const mailOptionsToClient = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "Thank You for Your Business Inquiry",
      text: `Dear ${name},

Thank you for reaching out to us. We have received your business inquiry and will review the details you've shared with us.

A member of our team will contact you shortly to discuss how we can assist with your needs.

Best regards,
Team Burhani Technologies
      `,
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');

    body, html {
      font-family: 'Montserrat', Arial, sans-serif;
    }
  </style>
</head>
<body>
  <div style="max-width: 600px; margin: 0 auto; background-color: #f8f9fa; padding: 20px; border: 1px solid #e0e0e0;">
    <h2 style="color: #333; font-size: 24px;">Dear ${name},</h2>
    <p>Thank you for reaching out to us. We have received your business inquiry and will review the details you've shared with us.</p>
    <p>A member of our team will contact you shortly to discuss how we can assist with your needs.</p>
    <p>Best regards,</p>
    <p><strong>Your Company Team</strong></p>
  </div>
</body>
</html>
      `,
    };

    const response1 = await sendEmail(mailOptions);
    const response2 = await sendEmail(mailOptionsToClient);

    if (response1.success && response2.success) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      return NextResponse.json(
        { error: "Error sending email(s)" },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
