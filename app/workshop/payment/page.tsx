import type { Metadata } from "next";
import Checkout from "@/components/payment/Checkout";
import {
  WaitlistAccess,
  WaitlistAmount,
  WaitlistProvider,
  WaitlistTotal,
} from "@/components/payment/Waitlist";
import { quoteFor } from "@/content/payment";
import { routes } from "@/content/site";
import { workshop } from "@/content/workshop";

export const metadata: Metadata = {
  title: "Reserve Your Seat",
  description: `Reserve your seat for the Crypto Clarity Workshop. ${workshop.price.amount} ${workshop.price.currency}, ${workshop.cohort}.`,
  robots: { index: false, follow: true },
};

/*
  The public price, derived once. It is what the server renders and the only
  quote on the page unless a waitlist code is verified — and because the total
  and step one both read from this single object, they cannot disagree.
*/
const standard = quoteFor(workshop.price);

export default function WorkshopPaymentPage() {
  return (
    <WaitlistProvider standard={standard}>
      <Checkout
        title="Reserve Your Seat"
        detail={workshop.cohortDash}
        price={standard.price}
        amount={standard.amount}
        totalSlot={
          <>
            <WaitlistTotal />
            <WaitlistAccess />
          </>
        }
        amountSlot={<WaitlistAmount />}
        back={{ href: routes.workshop, label: "Back to workshop" }}
        confirms="your seat"
      />
    </WaitlistProvider>
  );
}
