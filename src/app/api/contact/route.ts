import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Please write a message before sending." },
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanSubject = subject ? subject.trim() : "Portfolio Lead Inquiry";
    const cleanMessage = message.trim();

    // 1. Send Automated Email Notification via Resend API to hass.javed25@gmail.com
    const recipientEmail = process.env.NOTIFICATION_EMAIL || "hass.javed25@gmail.com";
    let emailSent = false;
    let resendResult = null;

    try {
      resendResult = await resend.emails.send({
        from: "Hassan Portfolio <onboarding@resend.dev>",
        to: [recipientEmail],
        replyTo: cleanEmail,
        subject: `📬 New Portfolio Lead: ${cleanSubject}`,
        html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0B1120; color: #E5E7EB; padding: 32px; border-radius: 16px; max-width: 600px; margin: 0 auto; border: 1px solid #1E293B;">
            <div style="border-bottom: 1px solid #334155; padding-bottom: 16px; margin-bottom: 24px;">
              <h2 style="color: #22D3EE; margin: 0; font-size: 24px;">New Portfolio Contact Message</h2>
              <p style="color: #94A3B8; font-size: 13px; margin-top: 4px;">Sent from Hassan Javed's Portfolio Site</p>
            </div>

            <div style="margin-bottom: 20px;">
              <p style="margin: 6px 0; font-size: 14px;"><strong style="color: #6366F1;">Sender Name:</strong> ${cleanName}</p>
              <p style="margin: 6px 0; font-size: 14px;"><strong style="color: #6366F1;">Sender Email:</strong> <a href="mailto:${cleanEmail}" style="color: #22D3EE;">${cleanEmail}</a></p>
              <p style="margin: 6px 0; font-size: 14px;"><strong style="color: #6366F1;">Subject:</strong> ${cleanSubject}</p>
            </div>

            <div style="background-color: #161F32; padding: 20px; border-radius: 12px; border-left: 4px solid #22D3EE; margin-bottom: 24px;">
              <h4 style="margin: 0 0 10px 0; color: #F8FAFC; font-size: 14px;">Message Content:</h4>
              <p style="white-space: pre-wrap; margin: 0; color: #CBD5E1; font-size: 14px; line-height: 1.6;">${cleanMessage}</p>
            </div>

            <div style="border-top: 1px solid #334155; pt-16px; text-align: center; color: #64748B; font-size: 12px; margin-top: 24px;">
              <p style="margin: 0;">Replies to this email will automatically send to <strong style="color: #94A3B8;">${cleanEmail}</strong></p>
            </div>
          </div>
        `,
      });

      console.log("Resend API email sent to", recipientEmail, ":", resendResult);
      emailSent = true;
    } catch (emailError: unknown) {
      console.error("Resend API email error:", emailError);
    }

    // 2. Insert into Supabase messages table (gracefully handled if table not yet created)
    try {
      const supabase = getSupabaseServerClient();
      const { error: dbError } = await supabase.from("messages").insert([
        {
          name: cleanName,
          email: cleanEmail,
          subject: cleanSubject,
          message: cleanMessage,
        },
      ]);

      if (dbError) {
        console.warn("Supabase insert warning (Run SQL script in Supabase SQL editor):", dbError.message);
      }
    } catch (dbErr: unknown) {
      console.warn("Supabase client error:", dbErr);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent successfully. I will get back to you shortly!",
      emailSent,
    });
  } catch (err: unknown) {
    console.error("Contact API route exception:", err);
    return NextResponse.json(
      { success: false, error: "An unexpected server error occurred." },
      { status: 500 }
    );
  }
}
