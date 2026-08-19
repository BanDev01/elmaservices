import { Trophy, Users, Activity, ShieldCheck } from "lucide-react";

/**
 * PLACEHOLDER VALUES — replace with real figures from ELMA SERVICES before
 * going live. See plan notes: chiffres clés demandés en placeholders.
 */
export const stats = [
  { key: "projects", value: "50+", icon: Trophy },
  { key: "clients", value: "20+", icon: Users },
  { key: "interventions", value: "200+", icon: Activity },
  { key: "technicians", value: "15+", icon: ShieldCheck },
] as const;
