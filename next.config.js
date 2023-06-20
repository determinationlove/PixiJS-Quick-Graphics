/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/gh-pages",
    experimental: {
        appDir: true,
    },
};

module.exports = nextConfig;
