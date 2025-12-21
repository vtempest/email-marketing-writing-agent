import { Resend } from 'resend';

// Use a placeholder during build time if API key is not set
const apiKey = process.env.RESEND_API_KEY || 're_placeholder';

if (!process.env.RESEND_API_KEY && typeof window === 'undefined') {
  console.warn('Warning: RESEND_API_KEY is not set. Email sending will not work.');
}

export const resend = new Resend(apiKey);

export interface SendEmailParams {
  to: string[];
  from: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}

/**
 * Send an email using Resend
 */
export async function sendEmail(params: SendEmailParams) {
  try {
    const { data, error } = await resend.emails.send({
      from: params.from,
      to: params.to,
      subject: params.subject,
      html: params.html,
      text: params.text,
      replyTo: params.replyTo,
    });

    if (error) {
      console.error('Resend error:', error);
      throw new Error(`Failed to send email: ${error.message}`);
    }

    return { success: true, data };
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
}

/**
 * Send a test email
 */
export async function sendTestEmail(params: {
  to: string;
  from: string;
  subject: string;
  html: string;
}) {
  return sendEmail({
    to: [params.to],
    from: params.from,
    subject: `[TEST] ${params.subject}`,
    html: params.html,
  });
}

/**
 * Send a batch of emails (for campaigns)
 */
export async function sendBatchEmails(emails: SendEmailParams[]) {
  const results = await Promise.allSettled(
    emails.map(email => sendEmail(email))
  );

  const successful = results.filter(r => r.status === 'fulfilled').length;
  const failed = results.filter(r => r.status === 'rejected').length;

  return {
    total: emails.length,
    successful,
    failed,
    results,
  };
}
