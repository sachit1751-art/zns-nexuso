import ServicesClient from '@/components/ServicesClient';

const baseUrl = 'https://ais-pre-h6ie32bfcr4tbj2tkah4pw-455569016805.asia-southeast1.run.app';

export const metadata = {
    title: 'Expert B2B SaaS & AI Automation Services | ZNS Nexus',
    description: 'Explore the engineered capabilities of ZNS Nexus. We specialize in custom B2B SaaS platforms, enterprise workflow automations, API integrations, and vector RAG systems.',
    alternates: {
        canonical: `${baseUrl}/services`,
    },
    openGraph: {
        title: 'Expert B2B SaaS & AI Automation Services | ZNS Nexus',
        description: 'Explore the engineered capabilities of ZNS Nexus. We specialize in custom B2B SaaS platforms, enterprise workflow automations, API integrations, and vector RAG systems.',
        url: `${baseUrl}/services`,
        siteName: 'ZNS Nexus',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Expert B2B SaaS & AI Automation Services | ZNS Nexus',
        description: 'Explore the engineered capabilities of ZNS Nexus. We specialize in custom B2B SaaS platforms, enterprise workflow automations, API integrations, and vector RAG systems.',
    },
};

export default function Page() {
    const pageLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebPage',
                '@id': `${baseUrl}/services/#webpage`,
                'url': `${baseUrl}/services`,
                'name': 'ZNS Nexus Services',
                'description': 'Explore our capabilities in custom SaaS engineering and AI systems.'
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }}
            />
            <ServicesClient />
        </>
    );
}
