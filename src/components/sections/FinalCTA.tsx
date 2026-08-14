import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24"
      style={{
        background: "linear-gradient(120deg, #0A1626 0%, #14203a 55%, #2F6BFF 135%)",
      }}
    >
      <Container className="relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold text-white sm:text-4xl">
            See the decision engine run on your own lanes
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
            Request a demo and we'll show you what it recommends for your
            trucks, your lanes, and your history.
          </p>
          <div className="mt-9">
            <Button href="/contact" variant="on-dark">
              Request a Demo
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
