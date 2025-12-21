import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, sendTestEmail } from '@/lib/services/resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, ...emailData } = body;

    // Send test email
    if (type === 'test') {
      const result = await sendTestEmail({
        to: emailData.to,
        from: emailData.from || 'onboarding@resend.dev', // Default sender
        subject: emailData.subject,
        html: emailData.html,
      });

      return NextResponse.json(result);
    }

    // Send regular email
    const result = await sendEmail({
      to: Array.isArray(emailData.to) ? emailData.to : [emailData.to],
      from: emailData.from || 'onboarding@resend.dev',
      subject: emailData.subject,
      html: emailData.html,
      text: emailData.text,
      replyTo: emailData.replyTo,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error('Email API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send email' },
      { status: 500 }
    );
  }
}
