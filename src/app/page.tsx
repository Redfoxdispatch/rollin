import { Hero } from "@/components/sections/Hero";
import { CredibilityBar } from "@/components/sections/CredibilityBar";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { DecisionEngine } from "@/components/sections/DecisionEngine";
import { Features } from "@/components/sections/Features";
import { ProductFlow } from "@/components/sections/ProductFlow";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { AISpotlight } from "@/components/sections/AISpotlight";
import { Security } from "@/components/sections/Security";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityBar />
      <ProblemSolution />
      <DecisionEngine />
      <Features />
      <ProductFlow />
      <ProductShowcase />
      <AISpotlight />
      <Security />
      <FAQ />
      <FinalCTA />
    </>
  );
}
