import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OfferHero from "@/components/offer/OfferHero";
import OfferVideo from "@/components/offer/OfferVideo";
import Syllabus from "@/components/offer/Syllabus";
import Reserve from "@/components/offer/Reserve";
import { routes } from "@/content/site";
import { coverage, reserve, topics, workshop } from "@/content/workshop";

export const metadata: Metadata = {
  title: "Crypto Clarity Workshop",
  description: `${coverage.intro} ${workshop.cohort}.`,
  alternates: { canonical: routes.workshop },
};

export default function WorkshopPage() {
  return (
    <>
      <Navbar current={routes.workshop} divider />

      <main>
        <OfferHero
          eyebrow={workshop.eyebrow}
          title={workshop.title}
          with={workshop.with}
          meta={workshop.cohortCaps}
        >
          <OfferVideo video={workshop.video} />
        </OfferHero>

        <Syllabus
          title={coverage.title}
          intro={coverage.intro}
          topics={topics}
        />

        <Reserve
          eyebrow={reserve.eyebrow}
          price={workshop.price}
          detail={workshop.cohort}
          cta={reserve.cta}
          href={workshop.reserveHref}
          note={reserve.note}
          benefits={reserve.benefits}
        />
      </main>

      <Footer />
    </>
  );
}
