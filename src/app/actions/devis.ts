"use server";

import { z } from "zod";
import { sendNotificationEmail } from "@/lib/email";
import { type FormState } from "./types";

const schema = z.object({
  name: z.string().trim().min(1),
  company: z.string().trim().optional(),
  email: z.string().trim().email(),
  phone: z.string().trim().min(1),
  serviceType: z.string().trim().min(1),
  budget: z.string().trim().optional(),
  message: z.string().trim().min(1),
});

export async function submitQuoteForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const parsed = schema.safeParse({
    name: formData.get("name"),
    company: formData.get("company"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    serviceType: formData.get("serviceType"),
    budget: formData.get("budget"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return { status: "error", errors: parsed.error.flatten().fieldErrors };
  }

  const { name, company, email, phone, serviceType, budget, message } = parsed.data;

  try {
    await sendNotificationEmail({
      subject: `Nouvelle demande de devis — ${name}`,
      replyTo: email,
      html: `
        <h2>Nouvelle demande de devis</h2>
        <p><strong>Nom :</strong> ${name}</p>
        ${company ? `<p><strong>Entreprise / site :</strong> ${company}</p>` : ""}
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <p><strong>Service demandé :</strong> ${serviceType}</p>
        ${budget ? `<p><strong>Budget estimatif :</strong> ${budget}</p>` : ""}
        <p><strong>Besoin :</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });
  } catch {
    return { status: "error" };
  }

  return { status: "success" };
}
