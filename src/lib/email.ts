import { Resend } from "resend";

const FROM = "ELMA SERVICES <site@elmaservices.com>";
const TO = process.env.RESEND_TO_EMAIL || "info@elmaservices.com";

type SendEmailInput = {
  subject: string;
  replyTo: string;
  html: string;
};

/**
 * Sends a notification email via Resend. Until RESEND_API_KEY is configured
 * (the user still needs to create a Resend account and verify a sending
 * domain), submissions are logged instead of failing the request.
 */
export async function sendNotificationEmail({ subject, replyTo, html }: SendEmailInput) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn(
      "[email] RESEND_API_KEY is not set — logging submission instead of sending.",
      { subject, replyTo }
    );
    return { delivered: false as const };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo,
    subject,
    html,
  });

  if (error) {
    console.error("[email] Resend error:", error);
    throw new Error("EMAIL_SEND_FAILED");
  }

  return { delivered: true as const };
}
