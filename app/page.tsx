import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Features } from "@/components/sections/Features";
import { WorksWith } from "@/components/sections/WorksWith";
import { Services } from "@/components/sections/Services";
import { AppDownload } from "@/components/sections/AppDownload";
import { WhyUs } from "@/components/sections/WhyUs";
import { Platforms } from "@/components/sections/Platforms";
import { GlobalMap } from "@/components/sections/GlobalMap";
import { Compliance } from "@/components/sections/Compliance";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <WorksWith />
      <Services />
      <AppDownload />
      <WhyUs />
      <Platforms />
      <GlobalMap />
      <Compliance />
      <FAQ />
      <Footer />
    </main>
  );
}