import B2bSaasDevelopmentClient from '@/components/B2bSaasDevelopmentClient';

const baseUrl = 'https://ais-pre-h6ie32bfcr4tbj2tkah4pw-455569016805.asia-southeast1.run.app';

export const metadata = {
    title: 'Custom B2B SaaS Engineering & Development | ZNS Nexus',
    description: 'We construct secure, high-concurrency B2B SaaS web applications. Multi-tenant designs, Next.js engineering, PostgreSQL integration, and cloud-native hosting.',
    alternates: {
        canonical: `${baseUrl}/services/b2b-saas-development`,
    },
    openGraph: {
        title: 'Custom B2B SaaS Engineering & Development | ZNS Nexus',
        description: 'We construct secure, high-concurrency B2B SaaS web applications. Multi-tenant designs, Next.js engineering, PostgreSQL integration, and cloud-native hosting.',
        url: `${baseUrl}/services/b2b-saas-development`,
        siteName: 'ZNS Nexus',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Custom B2B SaaS Engineering & Development | ZNS Nexus',
        description: 'We construct secure, high-concurrency B2B SaaS web applications. Multi-tenant designs, Next.js engineering, PostgreSQL integration, and cloud-native hosting.',
    },
};

export default function Page() {
    const pageLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebPage',
                '@id': `${baseUrl}/services/b2b-saas-development/#webpage`,
                'url': `${baseUrl}/services/b2b-saas-development`,
                'name': 'Custom B2B SaaS Development & Engineering',
                'description': 'End-to-end full-stack SaaS engineering, cloud deployment, and secure multi-tenant architecture.'
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }}
            />
            <B2bSaasDevelopmentClient />
        </>
    );
}
