import { NextResponse } from "next/server";
import { AgentMailClient } from "agentmail";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required" },
        { status: 400 }
      );
    }

    // Initialize AgentMail
    const apiKey = process.env.AGENT_MAIL_API_KEY;
    
    if (!apiKey) {
      // If no API key is set in Vercel, just log it so the app doesn't crash on the client
      console.warn("No AGENT_MAIL_API_KEY found. Logging lead:", { name, phone, email, service, message });
      return NextResponse.json({ success: true, warning: "Logged locally" });
    }

    const client = new AgentMailClient({ apiKey });

    // Try to get the designated inbox from Vercel ENV, fallback to the findseptic one if not set
    const inboxId = process.env.AGENTMAIL_INBOX_ID || "frightenedtruth840@findseptic.com";
    
    // Who the notification goes TO (Travis)
    const notifyEmail = process.env.NOTIFICATION_EMAIL || "travis@coleflooringllc.com";

    // Format the email
    const emailBody = `
NEW FLOORING QUOTE REQUEST
==========================

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}
Project Type: ${service || "Not specified"}

Message:
${message || "No message provided"}
    `.trim();

    // Send via AgentMail
    await client.inboxes.messages.send(inboxId, {
      to: [notifyEmail],
      subject: `🚨 New Lead: ${service ? service + ' - ' : ''}${name}`,
      text: emailBody,
    });

    console.log(`Lead sent to ${notifyEmail} via AgentMail inbox ${inboxId}`);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("AgentMail error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
