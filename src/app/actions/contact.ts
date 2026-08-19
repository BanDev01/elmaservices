"use server";

import { z } from "zod";
import { sendNotificationEmail } from "@/lib/email";
import { type FormState } from "./types";

const schema = z.object({
  name: z.string().trim().min(1),
  email: z.string().trim().email(),
  phone: z.string().trim().optional(),
  serviceType: z.string().trim().optional(),
  message: z.string().trim().min(1),
});

export async function submitContactForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    serviceType: formData.get("serviceType"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return { status: "error", errors: parsed.error.flatten().fieldErrors };
  }

  const { name, email, phone, serviceType, message } = parsed.data;

  try {
    await sendNotificationEmail({
      subject: `Nouveau message de contact — ${name}`,
      replyTo: email,
      html: `
        <h2>Nouveau message depuis le formulaire de contact</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        ${phone ? `<p><strong>Téléphone :</strong> ${phone}</p>` : ""}
        ${serviceType ? `<p><strong>Service :</strong> ${serviceType}</p>` : ""}
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });
  } catch {
    return { status: "error" };
  }

  return { status: "success" };
}
