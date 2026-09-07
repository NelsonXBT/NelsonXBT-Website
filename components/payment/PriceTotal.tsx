import type { Price } from "@/content/payment";
import styles from "./Checkout.module.css";

/**
 * The total panel. Lifted out of Checkout so the same markup can be rendered
 * on the server, where the price is fixed for the life of the page, or inside
 * a client component, where it can change — one definition, so the two can
 * never drift apart.
 */
export default function PriceTotal({ price }: { price: Price }) {
  return (
    <div className={styles.price}>
      <span className={styles.priceLabel}>Total</span>
      <span className={styles.priceValue}>
        {price.amount}
        <span>{price.currency}</span>
      </span>
    </div>
  );
}
