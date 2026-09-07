/**
 * Video sources.
 *
 * Both offer pages show a video, and the platform hosting it is expected
 * to change. Rather than hard-coding one embed, a video declares its
 * `provider` and the player resolves the URL — so switching a video from
 * Bunny Stream to YouTube (or back) is a one-line edit in content.
 *
 * Playback is always click-to-start: the poster is what loads with the
 * page, and no media is requested from the host until someone presses play.
 */

type VideoBase = {
  /** Local poster shown until playback starts. */
  readonly poster: string;
  readonly posterAlt: string;
  /** Accessible name for the player, and for the play button. */
  readonly title: string;
};

export type YouTubeVideo = VideoBase & {
  readonly provider: "youtube";
  /** The 11-character YouTube video id. */
  readonly id: string;
};

export type BunnyVideo = VideoBase & {
  readonly provider: "bunny";
  /** Bunny Stream library id — the first number in a play URL. */
  readonly libraryId: string;
  /** Bunny Stream video GUID. */
  readonly id: string;
  /**
   * The library's pull-zone host, e.g. "vz-468a1901-975.b-cdn.net" — the
   * origin the playlist and the video segments actually come from.
   *
   * Optional, and used only to warm the connection ahead of a click:
   * playback works without it, just with one more cold handshake in the
   * way. To find it, open the embed URL and look for the `.b-cdn.net`
   * host in the page source.
   */
  readonly cdnHost?: string;
};

export type Video = YouTubeVideo | BunnyVideo;

/**
 * The embed URL for a video, with playback started. Only ever called
 * after a click, so autoplay here is user-initiated.
 */
export function embedUrl(video: Video): string {
  if (video.provider === "bunny") {
    const params = new URLSearchParams({
      autoplay: "true",
      preload: "true",
      responsive: "true",
    });

    return `https://iframe.mediadelivery.net/embed/${video.libraryId}/${video.id}?${params}`;
  }

  const params = new URLSearchParams({
    autoplay: "1",
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
  });

  return `https://www.youtube-nocookie.com/embed/${video.id}?${params}`;
}

/** Human name of the host, used in the privacy note under a player. */
export function providerName(video: Video): string {
  return video.provider === "bunny" ? "Bunny Stream" : "YouTube";
}

/**
 * Every origin playback has to reach, in the order the browser needs them.
 *
 * Starting a Bunny video is three origins deep — the embed document, the
 * player's own JS and CSS, then the playlist and segments — and none of
 * them is touched until the click, so all three DNS lookups and TLS
 * handshakes land inside the wait. The player warms these ahead of time,
 * so pressing play costs a request rather than a round of introductions.
 */
export function videoOrigins(video: Video): readonly string[] {
  if (video.provider === "bunny") {
    return [
      "https://iframe.mediadelivery.net",
      "https://assets.mediadelivery.net",
      ...(video.cdnHost ? [`https://${video.cdnHost}`] : []),
    ];
  }

  return ["https://www.youtube-nocookie.com", "https://i.ytimg.com"];
}
