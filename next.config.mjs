/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/inmobiliaria",
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
