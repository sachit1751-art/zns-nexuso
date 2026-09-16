export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/'],
            },
        ],
        sitemap: 'https://ais-pre-h6ie32bfcr4tbj2tkah4pw-455569016805.asia-southeast1.run.app/sitemap.xml',
    };
}
