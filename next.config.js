/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: produces a plain HTML/CSS/JS bundle in `out/` that can be
  // hosted anywhere (Vercel, Netlify, S3, GitHub Pages, your own server).
  output: 'export',
  reactStrictMode: true,
  images: {
    // Static export can't use Next's on-request image optimisation.
    // We only use hand-drawn SVG/Canvas graphics, so this has no real cost here.
    unoptimized: true,
  },
};

module.exports = nextConfig;
