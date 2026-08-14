import { ShieldCheck, Lock, Headset, Plug } from "lucide-react";
import { Container } from "@/components/ui/Container";

const ITEMS = [
  { icon: ShieldCheck, label: "Built for FMCSA-licensed carriers" },
  { icon: Lock, label: "Bank-level data encryption" },
  { icon: Headset, label: "US-based support" },
  { icon: Plug, label: "Built to integrate with leading load boards" },
];

function ItemRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-10 pr-10"
      aria-hidden={ariaHidden || undefined}
    >
      {ITEMS.map((item) => (
        <span
          key={item.label}
          className="flex items-center gap-2.5 whitespace-nowrap text-sm font-medium text-neutral-gray"
        >
          <item.icon className="h-4.5 w-4.5 shrink-0 text-primary-blue" strokeWidth={1.75} />
          {item.label}
        </span>
      ))}
    </div>
  );
}

export function CredibilityBar() {
  return (
    <section className="border-b border-neutral-border bg-neutral-light">
      <Container className="hidden py-6 sm:block">
        <ul className="flex flex-row flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {ITEMS.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-2.5 text-sm font-medium text-neutral-gray"
            >
              <item.icon className="h-4.5 w-4.5 shrink-0 text-primary-blue" strokeWidth={1.75} />
              {item.label}
            </li>
          ))}
        </ul>
      </Container>

      <div className="overflow-hidden py-6 sm:hidden">
        <div className="flex w-max items-center animate-marquee">
          <ItemRow />
          <ItemRow ariaHidden />
        </div>
      </div>
    </section>
  );
}
