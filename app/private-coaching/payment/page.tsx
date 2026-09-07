import type { Metadata } from "next";
import Checkout from "@/components/payment/Checkout";
import { routes } from "@/content/site";
import { oneOnOne } from "@/content/session";

export const metadata: Metadata = {
  title: "Book Your Sessions",
  description: `Book your private coaching sessions with Nelson Edeh. ${oneOnOne.price.amount} ${oneOnOne.price.currency} for three two-hour sessions.`,
  robots: { index: false, follow: true },
};

export default function SessionPaymentPage() {
  return (
    <Checkout
      title="Book Your Sessions"
      detail={oneOnOne.formatDash}
      price={oneOnOne.price}
      amount={`${oneOnOne.price.amount.replace("$", "")} ${oneOnOne.price.currency}`}
      back={{ href: routes.session, label: "Back to private coaching" }}
      confirms="your sessions"
    />
  );
}
