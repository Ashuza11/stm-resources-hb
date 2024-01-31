/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["@repo/ui"],
    images: {
        remotePatterns: [
            { hostname: "avataaars.io", protocol: "https", pathname: "**" },
        ],
        dangerouslyAllowSVG: true,
    },
};

export default nextConfig;
