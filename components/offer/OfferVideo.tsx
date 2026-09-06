"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./OfferVideo.module.css";

type OfferVideoProps = {
  video: {
    /** YouTube video id. */
    readonly id: string;
    readonly poster: string;
    readonly posterAlt: string;
    /** Accessible name for the iframe, and for the play button. */
    readonly title: string;
  };
};

/**
 * Poster first, YouTube iframe only after a click — so the page loads
 * without pulling in the embed. The one interactive piece on the page.
 */
export default function OfferVideo({ video }: OfferVideoProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className={styles.wrap}>
        <iframe
          className={styles.frame}
          src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <Image
        src={video.poster}
        alt={video.posterAlt}
        fill
        priority
        sizes="(max-width: 899px) 100vw, 860px"
        className={styles.poster}
      />

      <div className={styles.scrim} aria-hidden="true" />

      <button
        type="button"
        className={styles.play}
        onClick={() => setPlaying(true)}
      >
        <span className={styles.playInner} aria-hidden="true">
          &#9654;
        </span>
        <span className="visuallyHidden">Play: {video.title}</span>
      </button>
    </div>
  );
}
