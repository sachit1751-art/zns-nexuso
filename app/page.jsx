import HomeClient from '@/components/HomeClient';

const baseUrl = 'https://ais-pre-h6ie32bfcr4tbj2tkah4pw-455569016805.asia-southeast1.run.app';

export const metadata = {
    title: 'ZNS Nexus | B2B SaaS Development & AI Automation Agency',
    description: 'ZNS Nexus is an elite B2B SaaS development and AI workflow automation agency. We build custom web applications, integrate advanced AI, and automate business workflows.',
    alternates: {
        canonical: baseUrl,
    },
    openGraph: {
        title: 'ZNS Nexus | B2B SaaS Development & AI Automation Agency',
        description: 'Elite B2B SaaS development and AI workflow automation agency. We build custom web applications, integrate advanced AI, and automate business workflows.',
        url: baseUrl,
        siteName: 'ZNS Nexus',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'ZNS Nexus | B2B SaaS Development & AI Automation Agency',
        description: 'Elite B2B SaaS development and AI workflow automation agency. We build custom web applications, integrate advanced AI, and automate business workflows.',
    },
};

export default function Home() {
    const pageLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebPage',
                '@id': `${baseUrl}/#webpage`,
                'url': baseUrl,
                'name': 'ZNS Nexus Homepage',
                'description': 'Elite B2B SaaS development and AI workflow automation agency.'
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }}
            />
            <HomeClient />
        </>
    );
}
