export default function sitemap() {
    const baseUrl = 'https://ais-pre-h6ie32bfcr4tbj2tkah4pw-455569016805.asia-southeast1.run.app';

    const routes = [
        '',
        '/services',
        '/services/ai-automation',
        '/services/b2b-saas-development',
        '/services/workflow-automation',
        '/services/custom-apps',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
    }));
}
