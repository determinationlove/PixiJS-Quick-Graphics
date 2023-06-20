/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/master",
    experimental: {
        appDir: true,
    },
};

module.exports = nextConfig;
