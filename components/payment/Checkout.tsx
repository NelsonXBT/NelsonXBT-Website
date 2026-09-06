import Link from "next/link";
import Logo from "@/components/layout/Logo";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Footer from "@/components/layout/Footer";
import AddressBlock from "@/components/payment/AddressBlock";
import { confirmStep, wallet } from "@/content/payment";
import styles from "./Checkout.module.css";

type CheckoutProps = {
  /** Small caps line above the title — which offer is being paid for. */
  eyebrow: string;
  title: string;
  /** One line of terms under the title: a cohort date, or the format. */
  detail: string;
  price: { readonly amount: string; readonly currency: string };
  /** The exact amount to send, e.g. "49 USDT" — emphasised in step one. */
  amount: string;
  /** Where the "back" link returns to, and its label. */
  back: { readonly href: string; readonly label: string };
  /** What gets confirmed after payment — "your seat", "your sessions". */
  confirms: string;
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
            <Eyebrow rule>{eyebrow}</Eyebrow>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.cohort}>{detail}</p>
          </div>

          <div className={styles.price}>
            <span className={styles.priceLabel}>Total</span>
            <span className={styles.priceValue}>
              {price.amount}
              <span>{price.currency}</span>
            </span>
          </div>

          <ol className={styles.steps}>
            <li className={styles.step}>
              <span className={styles.stepNumber} aria-hidden="true">
                1
              </span>

              <div>
                <h2 className={styles.stepTitle}>Send Payment</h2>
                <p className={styles.stepBody}>
                  Send exactly <strong>{amount}</strong> to the address below.
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
                    arrow
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
