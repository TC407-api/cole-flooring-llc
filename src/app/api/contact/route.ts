import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, phone, email, service, message } = body;

  if (!name || !phone) {
    return NextResponse.json(
      { error: "Name and phone are required" },
      { status: 400 }
    );
  }

  // TODO: Replace with Formspree, Twilio, or email service
  // For now, log the submission
  console.log("New quote request:", { name, phone, email, service, message });

  return NextResponse.json({ success: true });
}
