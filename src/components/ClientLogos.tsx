import Image from "next/image";
import { clients } from "@/content/clients";

export function ClientLogos() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:justify-between">
      {clients.map((client) => (
        <div key={client.name} className="flex h-12 items-center opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0">
          <Image
            src={client.logo}
            alt={client.name}
            width={140}
            height={48}
            loading="eager"
            className="h-10 w-auto object-contain sm:h-12"
          />
        </div>
      ))}
    </div>
  );
}
