import AiAutomationClient from '@/components/AiAutomationClient';

const baseUrl = 'https://ais-pre-h6ie32bfcr4tbj2tkah4pw-455569016805.asia-southeast1.run.app';

export const metadata = {
    title: 'Enterprise AI & Autonomous Agentic Automation | ZNS Nexus',
    description: 'Deploy advanced multi-agentic AI workflows, vector databases, vector RAG document parsing engines, and autonomous decision pipelines with ZNS Nexus.',
    alternates: {
        canonical: `${baseUrl}/services/ai-automation`,
    },
    openGraph: {
        title: 'Enterprise AI & Autonomous Agentic Automation | ZNS Nexus',
        description: 'Deploy advanced multi-agentic AI workflows, vector databases, vector RAG document parsing engines, and autonomous decision pipelines with ZNS Nexus.',
        url: `${baseUrl}/services/ai-automation`,
        siteName: 'ZNS Nexus',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Enterprise AI & Autonomous Agentic Automation | ZNS Nexus',
        description: 'Deploy advanced multi-agentic AI workflows, vector databases, vector RAG document parsing engines, and autonomous decision pipelines with ZNS Nexus.',
    },
};

export default function Page() {
    const pageLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebPage',
                '@id': `${baseUrl}/services/ai-automation/#webpage`,
                'url': `${baseUrl}/services/ai-automation`,
                'name': 'AI Workflow Automation & Agentic Systems',
                'description': 'Custom autonomous agent engineering, document parsing, and RAG architectures.'
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }}
            />
            <AiAutomationClient />
        </>
    );
}
