"use client";

import { useCallback, useRef, useState } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import { embedUrl, videoOrigins, type Video } from "@/content/video";
import styles from "./OfferVideo.module.css";

type OfferVideoProps = {
  video: Video;
};

/**
 * Poster first, player only after a click — so the page loads without
 * pulling in an embed, and nothing autoplays. The host is whatever the
 * video declares in content, so the same player serves Bunny Stream and
 * YouTube without a change here.
 *
 * Two things the naive version of this gets wrong, both fixed below:
 *
 * 1. Swapping the poster out for the iframe shows the iframe's own blank
 *    white page for as long as the embed takes to paint. So the poster
 *    stays mounted underneath and the iframe fades in over it once it has
 *    loaded — the frame never goes white.
 * 2. Playback is three cold origins deep (see `videoOrigins`), and doing
 *    nothing until the click puts all of that latency after the press.
 *    Hovering or focusing the button warms those connections first.
 */
export default function OfferVideo({ video }: OfferVideoProps) {
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const warmed = useRef(false);

  /*
    Opens the connections playback needs while the pointer is still
    travelling to the button. Idempotent in React, but the ref keeps a
    long hover from queueing the same work on every event.
  */
  const warm = useCallback(() => {
    if (warmed.current) return;
    warmed.current = true;

    for (const origin of videoOrigins(video)) {
      ReactDOM.prefetchDNS(origin);
      ReactDOM.preconnect(origin);
    }
  }, [video]);

  return (
    <div className={styles.wrap} data-playing={playing || undefined}>
      {/*
        Stays mounted once playback starts: it is what the viewer looks at
        while the embed boots, and it sits behind the iframe afterwards.
      */}
      <Image
        src={video.poster}
        alt={video.posterAlt}
        fill
        priority
        sizes="(max-width: 899px) 100vw, 820px"
        className={styles.poster}
      />

      <div className={styles.scrim} aria-hidden="true" />

      {playing ? (
        <>
          <iframe
            className={styles.frame}
            data-ready={ready || undefined}
            src={embedUrl(video)}
            title={video.title}
            onLoad={() => setReady(true)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen
          />

          {/* Says "working on it" for the seconds the player takes to appear. */}
          {ready ? null : (
            <div className={styles.loading}>
              <span className={styles.spinner} aria-hidden="true" />
              <span className="visuallyHidden" role="status">
                Loading {video.title}
              </span>
            </div>
          )}
        </>
      ) : (
        <button
          type="button"
          className={styles.play}
          onClick={() => setPlaying(true)}
          onPointerEnter={warm}
          onPointerDown={warm}
          onFocus={warm}
        >
          <span className={styles.playInner} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          </span>
          <span className={styles.playLabel} aria-hidden="true">
            Watch
          </span>
          <span className="visuallyHidden">Play: {video.title}</span>
        </button>
      )}
    </div>
  );
}
