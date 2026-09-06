import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OfferHero from "@/components/offer/OfferHero";
import OfferVideo from "@/components/offer/OfferVideo";
import Syllabus from "@/components/offer/Syllabus";
import Reserve from "@/components/offer/Reserve";
import HowItWorks from "@/components/offer/HowItWorks";
import { routes } from "@/content/site";
import {
  oneOnOne,
  sessionCoverage,
  sessionHow,
  sessionReserve,
  sessionTopics,
} from "@/content/session";

export const metadata: Metadata = {
  title: "Book a 1-on-1 Session",
  description: `${sessionCoverage.intro} ${oneOnOne.price.amount} ${oneOnOne.price.currency} for three sessions with Nelson Edeh.`,
  alternates: { canonical: routes.session },
};

export default function SessionPage() {
  return (
    <>
      <Navbar current={routes.session} divider />

      <main>
        <OfferHero
          eyebrow={oneOnOne.eyebrow}
          title={oneOnOne.title}
          with={oneOnOne.with}
          meta={oneOnOne.format}
        >
          <OfferVideo video={oneOnOne.video} />
        </OfferHero>

        <Syllabus
          title={sessionCoverage.title}
          intro={sessionCoverage.intro}
          topics={sessionTopics}
        />

        <Reserve
          eyebrow={sessionReserve.eyebrow}
          price={oneOnOne.price}
          detail={oneOnOne.priceNote}
          cta={sessionReserve.cta}
          href={oneOnOne.reserveHref}
          note={sessionReserve.note}
          benefits={sessionReserve.benefits}
        />

        <HowItWorks title={sessionHow.title} body={sessionHow.body} />
      </main>

      <Footer />
    </>
  );
}
