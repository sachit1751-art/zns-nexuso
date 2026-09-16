import './globals.css';
import './styles/base.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/motion-cards.css';
import './styles/showreel.css';
import './styles/cards.css';
import './styles/marquee.css';
import './styles/footer.css';
import './styles/vimeo-hero.css';
import './styles/cursor.css';
import './styles/responsive.css';

export const dynamic = 'force-dynamic';

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
    icons: {
        icon: [
            { url: '/favicon.svg', type: 'image/svg+xml' },
        ],
        shortcut: '/favicon.svg',
        apple: '/favicon.svg',
    },
};

export default function RootLayout({ children }) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Organization',
                '@id': `${baseUrl}/#organization`,
                'name': 'ZNS Nexus',
                'url': baseUrl,
                'logo': {
                    '@type': 'ImageObject',
                    '@id': `${baseUrl}/#logo`,
                    'url': `${baseUrl}/favicon.svg`,
                    'caption': 'ZNS Nexus Logo'
                },
                'description': 'Elite B2B SaaS development and AI workflow automation agency.'
            },
            {
                '@type': 'WebSite',
                '@id': `${baseUrl}/#website`,
                'url': baseUrl,
                'name': 'ZNS Nexus',
                'description': 'B2B SaaS Development & AI Automation Agency',
                'publisher': {
                    '@id': `${baseUrl}/#organization`
                }
            },
            {
                '@type': 'Service',
                'name': 'B2B SaaS Development',
                'provider': {
                    '@id': `${baseUrl}/#organization`
                },
                'description': 'Custom full-stack web applications, SaaS MVPs, cloud architecture, and Next.js engineering.'
            },
            {
                '@type': 'Service',
                'name': 'AI Workflow Automation',
                'provider': {
                    '@id': `${baseUrl}/#organization`
                },
                'description': 'Intelligent AI agent fleets, API integrations, and business process automation.'
            }
        ]
    };

    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
