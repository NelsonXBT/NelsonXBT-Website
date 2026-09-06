import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { privacy } from "@/content/legal";
import { routes } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What NelsonXBT collects and what it doesn't. No analytics, no tracking pixels, no advertising and no forms.",
  alternates: { canonical: routes.privacy },
};

export default function PrivacyPage() {
  return <LegalPage content={privacy} />;
}
