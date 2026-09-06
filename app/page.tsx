import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Credibility from "@/components/home/Credibility";
import PrimaryActions from "@/components/home/PrimaryActions";
import CommunityLinks from "@/components/home/CommunityLinks";

export const metadata: Metadata = {
  title: "NelsonXBT — Practical Crypto Knowledge for Real Opportunities",
  description:
    "NelsonXBT is the personal brand of Nelson Edeh. Practical crypto education, insights and ideas to help you understand the space and navigate its opportunities. Book a 1-on-1 session or work together.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Credibility />
        <PrimaryActions />
        <CommunityLinks />
      </main>

      <Footer />
    </>
  );
}
