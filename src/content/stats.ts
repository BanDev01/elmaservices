import { Trophy, Users, Activity, ShieldCheck } from "lucide-react";

export const stats = [
  { key: "projects", value: "120+", icon: Trophy },
  { key: "clients", value: "85", icon: Users },
  { key: "interventions", value: "4,500h", icon: Activity },
  { key: "technicians", value: "25", icon: ShieldCheck },
] as const;
