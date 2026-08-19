import {
  Zap,
  Cable,
  ShieldCheck,
  Thermometer,
  Wrench,
  ClipboardList,
  PackageSearch,
  type LucideIcon,
} from "lucide-react";

export type ServiceId =
  | "postes-lignes"
  | "reseaux-terre"
  | "lignes-mt-bt"
  | "inspection"
  | "maintenance-ht"
  | "etudes-conseil"
  | "fourniture-equipements";

export type Service = {
  id: ServiceId;
  image: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    id: "postes-lignes",
    image: "/images/service-postes-lignes.jpg",
    icon: Zap,
  },
  {
    id: "reseaux-terre",
    image: "/images/service-reseaux-terre.jpg",
    icon: ShieldCheck,
  },
  {
    id: "lignes-mt-bt",
    image: "/images/service-lignes-mt-bt.jpg",
    icon: Cable,
  },
  {
    id: "inspection",
    image: "/images/service-inspection.jpg",
    icon: Thermometer,
  },
  {
    id: "maintenance-ht",
    image: "/images/service-maintenance-ht.jpg",
    icon: Wrench,
  },
  {
    id: "etudes-conseil",
    image: "/images/service-etudes-conseil.jpg",
    icon: ClipboardList,
  },
  {
    id: "fourniture-equipements",
    image: "/images/service-fourniture-equipements.jpg",
    icon: PackageSearch,
  },
];
