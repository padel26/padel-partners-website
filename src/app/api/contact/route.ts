import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message, type, service, phone, city, projectStage, interests, organisation } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const isQuote = type === "quote";
    const subjectService = service ? ` — ${service}` : "";

    await resend.emails.send({
      from: "The Padel Partners Website <noreply@thepadelpartners.com>",
      to: "info@thepadelpartners.com",
      replyTo: email,
      subject: `New ${isQuote ? "Quote Request" : "Enquiry"} from ${name}${subjectService}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <div style="background: #1A6B3A; padding: 16px 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 18px;">New ${isQuote ? "Quote Request" : "Website Enquiry"}${subjectService}</h1>
          </div>
          <div style="background: #F4F4F2; padding: 24px; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: 600; color: #141414; width: 140px;">Name</td><td style="color: #141414;">${name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: 600; color: #141414;">Email</td><td><a href="mailto:${email}" style="color: #1A6B3A;">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding: 8px 0; font-weight: 600; color: #141414;">Phone</td><td style="color: #141414;">${phone}</td></tr>` : ""}
              ${organisation || company ? `<tr><td style="padding: 8px 0; font-weight: 600; color: #141414;">Organisation</td><td style="color: #141414;">${organisation || company}</td></tr>` : ""}
              ${city ? `<tr><td style="padding: 8px 0; font-weight: 600; color: #141414;">City</td><td style="color: #141414;">${city}</td></tr>` : ""}
              ${projectStage ? `<tr><td style="padding: 8px 0; font-weight: 600; color: #141414;">Project Stage</td><td style="color: #141414;">${projectStage}</td></tr>` : ""}
              ${service ? `<tr><td style="padding: 8px 0; font-weight: 600; color: #141414;">Service</td><td style="background: #E8F5EE; color: #1A6B3A; font-weight: 600; padding: 6px 10px; border-radius: 4px;">${service}</td></tr>` : ""}
              ${interests && interests.length ? `<tr><td style="padding: 8px 0; font-weight: 600; color: #141414; vertical-align: top;">Interests</td><td style="color: #141414;">${interests.join(", ")}</td></tr>` : ""}
            </table>
            <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
              <p style="font-weight: 600; color: #141414; margin: 0 0 8px;">Message</p>
              <p style="color: #8C8C8C; white-space: pre-wrap; margin: 0;">${message}</p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
