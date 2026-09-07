import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
    /1-on-1 was the coaching page's original URL. It has been shared and
    indexed under that path, so both it and its checkout keep working
    permanently rather than turning into 404s.
  */
  redirects() {
    return [
      {
        source: "/1-on-1",
        destination: "/private-coaching",
        permanent: true,
      },
      {
        source: "/1-on-1/payment",
        destination: "/private-coaching/payment",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
