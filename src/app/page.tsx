import { Nav } from "@/components/Nav";
import { ProductStage } from "@/components/ProductStage";
import { ScrollAssist } from "@/components/ScrollAssist";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Method } from "@/components/sections/Method";
import { Proof } from "@/components/sections/Proof";
import { Reserve } from "@/components/sections/Reserve";
import { Spec } from "@/components/sections/Spec";
import { Why } from "@/components/sections/Why";
import { ScrollProgressProvider } from "@/lib/scroll-progress";

export default function Home() {
  return (
    <ScrollProgressProvider>
      <SmoothScroll>
        <div className="grain" aria-hidden />
        <ProductStage />
        <Nav />
        <ScrollAssist />
        <main id="main" tabIndex={-1} className="relative">
          <Hero />
          <Why />
          <Method />
          <Spec />
          <Proof />
          <Reserve />
        </main>
        <Footer />
      </SmoothScroll>
    </ScrollProgressProvider>
  );
}
