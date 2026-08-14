import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { DashboardMock } from "./DashboardMock";

export function ProductShowcase() {
  return (
    <section className="bg-primary-dark py-24 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Product</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
            One console for dispatch, tracking, and decisions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            Switch tabs below to see dispatch, live tracking, and the
            decision engine's reasoning without leaving one screen.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-4xl">
          <DashboardMock />
          <p className="mt-4 text-center text-xs text-white/35">
            Illustrative product view with sample data.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
