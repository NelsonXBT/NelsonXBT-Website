"use client";

import { useState } from "react";
import { wallet } from "@/content/payment";
import styles from "./AddressBlock.module.css";

/**
 * Network and receiving address, with copy-to-clipboard.
 * The only client-side logic on the payment page.
 */
export default function AddressBlock() {
  const [copied, setCopied] = useState(false);

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(wallet.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className={styles.box}>
      <div className={styles.row}>
        <span className={styles.label}>Network</span>
        <strong className={styles.network}>{wallet.network}</strong>
      </div>

      <div className={`${styles.row} ${styles.walletRow}`}>
        <div className={styles.wallet}>
          <span className={styles.label} id="usdt-address-label">
            USDT address
          </span>
          <strong className={styles.address}>{wallet.address}</strong>
        </div>

        <button
          type="button"
          onClick={copyAddress}
          className={[styles.copy, copied ? styles.copied : ""]
            .filter(Boolean)
            .join(" ")}
          aria-describedby="usdt-address-label"
        >
          <span aria-hidden="true">{copied ? "✓" : "⧉"}</span>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <p role="status" aria-live="polite" className="visuallyHidden">
        {copied ? "USDT address copied to clipboard" : ""}
      </p>
    </div>
  );
}
