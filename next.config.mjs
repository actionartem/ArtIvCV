/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',              // КЛЮЧ: генерим статические HTML
  images: { unoptimized: true }, // чтобы <Image /> работал в статике
  typescript: { ignoreBuildErrors: true },
};
export default nextConfig;
