import { HeroSection } from "@/components/sections/hero-section";
import { WhatAreVCsSection } from "@/components/sections/what-are-vcs-section";
import { FeaturesSection } from "@/components/sections/features-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhatAreVCsSection />
      <FeaturesSection />
    </main>
  );
}
