import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    eslint: {
        ignoreDuringBuilds: true,
    },
    webpack: (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname);
        return config;
    },
    async headers() {
        return [
            {
                source: '/assets/:path*.mp4',
                headers: [
                    { key: 'Accept-Ranges', value: 'bytes' },
                    { key: 'Content-Type', value: 'video/mp4' },
                    { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
                ],
            },
            {
                source: '/assets/:path*.webm',
                headers: [
                    { key: 'Accept-Ranges', value: 'bytes' },
                    { key: 'Content-Type', value: 'video/webm' },
                    { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
                ],
            },
        ];
    },
};

export default nextConfig;
