import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { terms } from "@/content/legal";
import { routes } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms for the NelsonXBT website and its services — the Crypto Clarity Workshop and private coaching. Education only, not financial advice.",
  alternates: { canonical: routes.terms },
};

export default function TermsPage() {
  return <LegalPage content={terms} />;
}
