export type FormState = {
  status: "idle" | "success" | "error";
  errors?: Record<string, string[]>;
};

export const initialFormState: FormState = { status: "idle" };
