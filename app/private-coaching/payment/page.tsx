import type { Metadata } from "next";
import Checkout from "@/components/payment/Checkout";
import { routes } from "@/content/site";
import { oneOnOne } from "@/content/session";

export const metadata: Metadata = {
  title: "Book Your Session",
  description: `Book your private coaching session with Nelson Edeh. ${oneOnOne.price.amount} ${oneOnOne.price.currency} for one two-hour session.`,
  robots: { index: false, follow: true },
};

export default function SessionPaymentPage() {
  return (
    <Checkout
      title="Book Your Session"
      detail={oneOnOne.formatDash}
      price={oneOnOne.price}
      amount={`${oneOnOne.price.amount.replace("$", "")} ${oneOnOne.price.currency}`}
      back={{ href: routes.session, label: "Back to private coaching" }}
      confirms="your session"
    />
  );
}
