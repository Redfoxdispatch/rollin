import type { ReactNode } from "react";

export function LegalSection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-neutral-border pt-10 first:border-t-0 first:pt-0"
    >
      <h2 className="font-heading text-xl font-semibold text-primary-dark sm:text-2xl">
        <span className="text-primary-blue">{number}.</span> {title}
      </h2>
      <div className="prose-legal mt-4 space-y-4 text-sm leading-relaxed text-neutral-gray sm:text-[15px]">
        {children}
      </div>
    </section>
  );
}

export function LegalToc({
  items,
}: {
  items: { id: string; title: string }[];
}) {
  return (
    <nav
      aria-label="Table of contents"
      className="rounded-2xl border border-neutral-border bg-neutral-light p-6"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-gray">
        Contents
      </p>
      <ol className="mt-4 space-y-2">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-sm text-neutral-gray transition-colors hover:text-primary-blue"
            >
              {i + 1}. {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
