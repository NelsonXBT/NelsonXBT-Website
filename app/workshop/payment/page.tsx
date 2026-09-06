import type { Metadata } from "next";
import Checkout from "@/components/payment/Checkout";
import { routes } from "@/content/site";
import { workshop } from "@/content/workshop";

export const metadata: Metadata = {
  title: "Reserve Your Seat",
  description: `Reserve your seat for the Crypto Clarity Workshop. ${workshop.price.amount} ${workshop.price.currency}, ${workshop.cohort}.`,
  robots: { index: false, follow: true },
};

export default function WorkshopPaymentPage() {
  return (
    <Checkout
      eyebrow={workshop.eyebrow}
      title="Reserve Your Seat"
      detail={workshop.cohortDash}
      price={workshop.price}
      amount={`${workshop.price.amount.replace("$", "")} ${workshop.price.currency}`}
      back={{ href: routes.workshop, label: "Back to workshop" }}
      confirms="your seat"
    />
  );
}
