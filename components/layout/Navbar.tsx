"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { nav } from "@/content/site";
import Container from "@/components/ui/Container";
import Logo from "./Logo";
import styles from "./Navbar.module.css";

type NavbarProps = {
  /** Href of the page being viewed, so its nav link reads as current. */
  current?: string;
  /** Hairline under the bar. Off on the homepage, where the hero carries it. */
  divider?: boolean;
};

/**
 * Three destinations and the wordmark. Inline from the tablet breakpoint
 * up; below it the links collapse behind a hamburger, because "Private
 * Coaching" is too long to sit on a phone's bar beside two other labels.
 */
export default function Navbar({ current, divider = false }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  /* Escape closes it, which is the one keyboard affordance a disclosure
     like this is expected to have. */
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={[styles.header, divider ? styles.divider : ""]
        .filter(Boolean)
        .join(" ")}
      data-open={open || undefined}
    >
      <Container className={styles.inner}>
        <Logo />

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((wasOpen) => !wasOpen)}
        >
          {/*
            Three bars that become a cross: the middle one fades while the
            outer two rotate onto each other. One element per bar keeps it
            a transform, so it stays smooth and needs no icon swap.
          */}
          <span className={styles.bars} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav
          className={styles.nav}
          id={panelId}
          aria-label="Main"
          /*
            Open state lives on the header so one attribute drives both the
            icon and the panel. Whether a closed panel is reachable is a
            question of viewport, not of markup, so the CSS handles it:
            `visibility: hidden` keeps the collapsed links out of the tab
            order on a phone, and the desktop rule puts them back.
          */
        >
          {nav.map((item) => {
            const isCurrent = item.href === current;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[styles.link, isCurrent ? styles.current : ""]
                  .filter(Boolean)
                  .join(" ")}
                aria-current={isCurrent ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
