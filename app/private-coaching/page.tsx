import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OfferHero from "@/components/offer/OfferHero";
// import OfferVideo from "@/components/offer/OfferVideo";
// import Syllabus from "@/components/offer/Syllabus";
import Reserve from "@/components/offer/Reserve";
import HowItWorks from "@/components/offer/HowItWorks";
import { routes } from "@/content/site";
import {
  oneOnOne,
  sessionHow,
  sessionReserve,
  // sessionCoverage,
  // sessionTopics,
} from "@/content/session";

export const metadata: Metadata = {
  title: "Private Coaching",
  description: `${oneOnOne.intro} ${oneOnOne.price.amount} ${oneOnOne.price.currency} for one two-hour session with Nelson Edeh.`,
  alternates: { canonical: routes.session },
};

export default function SessionPage() {
  return (
    <>
      <Navbar current={routes.session} divider />

      <main>
        {/* Hero video — commented out. Restore it as a child of
            <OfferHero> (and un-comment the OfferVideo import) to bring
            the player back:
            <OfferVideo video={oneOnOne.video} />
        */}
        <OfferHero
          title={oneOnOne.title}
          inlineTitle
          with={oneOnOne.with}
          meta={oneOnOne.format}
          intro={oneOnOne.intro}
        />

        {/* "Built Around You" and its numbered topics — commented out.
            The intro line now sits in the hero above.
        <Syllabus
          title={sessionCoverage.title}
          intro={sessionCoverage.intro}
          topics={sessionTopics}
        />
        */}

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
