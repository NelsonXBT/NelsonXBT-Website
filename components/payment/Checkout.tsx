import Link from "next/link";
import type { ReactNode } from "react";
import Logo from "@/components/layout/Logo";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Footer from "@/components/layout/Footer";
import AddressBlock from "@/components/payment/AddressBlock";
import PriceTotal from "@/components/payment/PriceTotal";
import { confirmStep, wallet, type Price } from "@/content/payment";
import styles from "./Checkout.module.css";

type CheckoutProps = {
  /** Optional small caps line above the title — which offer is being paid for. */
  eyebrow?: string;
  title: string;
  /** One line of terms under the title: a cohort date, or the format. */
  detail: string;
  price: Price;
  /** The exact amount to send, e.g. "49 USDT" — emphasised in step one. */
  amount: string;
  /** Where the "back" link returns to, and its label. */
  back: { readonly href: string; readonly label: string };
  /** What gets confirmed after payment — "your seat", "your sessions". */
  confirms: string;
  /**
   * Replaces the total panel, for an offer whose total can change after the
   * page has loaded. Whatever is passed also owns the space directly under
   * the panel. Given together with `amountSlot` or not at all — the two must
   * resolve to the same price.
   */
  totalSlot?: ReactNode;
  /** Replaces the emphasised amount in step one. See `totalSlot`. */
  amountSlot?: ReactNode;
};

/**
 * Checkout shell shared by every paid offer. Deliberately stripped of
 * site chrome — no navbar, no outbound links beyond the confirmation —
 * so the only actions available are pay and confirm.
 */
export default function Checkout({
  eyebrow,
  title,
  detail,
  price,
  amount,
  back,
  confirms,
  totalSlot,
  amountSlot,
}: CheckoutProps) {
  return (
    <>
      <header className={styles.header}>
        <Container narrow className={styles.headerInner}>
          <Logo />
          <Link href={back.href} className={styles.back}>
            <span aria-hidden="true">&larr;</span> {back.label}
          </Link>
        </Container>
      </header>

      <main className={styles.main}>
        <Container narrow>
          <div className={styles.head}>
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.cohort}>{detail}</p>
          </div>

          {totalSlot ?? <PriceTotal price={price} />}

          <ol className={styles.steps}>
            <li className={styles.step}>
              <span className={styles.stepNumber} aria-hidden="true">
                1
              </span>

              <div>
                <h2 className={styles.stepTitle}>Send Payment</h2>
                <p className={styles.stepBody}>
                  Send exactly {amountSlot ?? <strong>{amount}</strong>} to the
                  address below.
                </p>

                <div className={styles.address}>
                  <AddressBlock />
                </div>
              </div>
            </li>

            <li className={styles.step}>
              <span className={styles.stepNumber} aria-hidden="true">
                {confirmStep.number}
              </span>

              <div>
                <h2 className={styles.stepTitle}>{confirmStep.title}</h2>
                <p className={styles.stepBody}>
                  {confirmStep.body.replace("{what}", confirms)}
                </p>

                <div className={styles.confirm}>
                  <Button
                    href={wallet.telegramHref}
                    variant="outline"
                    external
                  >
                    {wallet.telegramCta}
                  </Button>
                </div>
              </div>
            </li>
          </ol>

          <div className={styles.warning}>
            <span className={styles.warningIcon} aria-hidden="true">
              i
            </span>
            <p className={styles.warningText}>
              <strong>Important:</strong> {wallet.warning}
            </p>
          </div>
        </Container>
      </main>

      <Footer narrow />
    </>
  );
}
