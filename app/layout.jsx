import Script from 'next/script';
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

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : 'https://ais-dev-h6ie32bfcr4tbj2tkah4pw-455569016805.asia-southeast1.run.app');

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: 'ZNS Nexus — Custom Web & SaaS Development',
        template: '%s | ZNS Nexus',
    },
    description: 'Digital product studio & agency specializing in custom web applications, SaaS development, and end-to-end product design.',
    alternates: {
        canonical: '/',
    },
    verification: {
        google: 'google881b414d39e80350',
    },
    openGraph: {
        title: 'ZNS Nexus — Custom Web & SaaS Development',
        description: 'Digital product studio & agency specializing in custom web applications, SaaS development, and end-to-end product design.',
        url: SITE_URL,
        siteName: 'ZNS Nexus',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'ZNS Nexus — Custom Web & SaaS Development',
                type: 'image/jpeg',
            },
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'ZNS Nexus — Custom Web & SaaS Development',
                type: 'image/png',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'ZNS Nexus — Custom Web & SaaS Development',
        description: 'Digital product studio & agency specializing in custom web applications, SaaS development, and end-to-end product design.',
        images: ['/og-image.jpg'],
        creator: '@teamtruus',
    },
    icons: {
        icon: 'https://cdn.prod.website-files.com/683703490bc01e1b8c052e06/68381362603d6402ee03c00e_favicon.png',
        apple: 'https://cdn.prod.website-files.com/683703490bc01e1b8c052e06/68381362603d6402ee03c00e_favicon.png',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'ZNS Nexus',
    alternateName: 'Nexus',
    url: SITE_URL,
    logo: 'https://cdn.prod.website-files.com/683703490bc01e1b8c052e06/68381362603d6402ee03c00e_favicon.png',
    image: `${SITE_URL}/og-image.jpg`,
    description: 'Digital product studio & agency specializing in custom web applications, SaaS development, and end-to-end product design.',
    founder: {
        '@type': 'Person',
        name: 'Sachit',
        url: 'https://sachin-portfoli.vercel.app',
    },
    sameAs: [
        'https://sachin-portfoli.vercel.app',
        'https://www.linkedin.com/company/truus/',
        'https://www.instagram.com/teamtruus/',
    ],
    knowsAbout: [
        'Custom Web Applications',
        'SaaS Development',
        'UI/UX Design',
        'Full-Stack Development',
        'Brand Strategy',
        'Digital Product Engineering',
    ],
    contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'sachit1771@gmail.com',
    },
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-ZNSNEXUS01';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="canonical" href={SITE_URL} />
                <meta name="google-site-verification" content="google881b414d39e80350" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
                />
            </head>
            <body>
                {GA_MEASUREMENT_ID && (
                    <>
                        <Script
                            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                            strategy="afterInteractive"
                        />
                        <Script id="google-analytics" strategy="afterInteractive">
                            {`
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${GA_MEASUREMENT_ID}', {
                                    page_path: window.location.pathname,
                                });
                            `}
                        </Script>
                    </>
                )}
                {children}
            </body>
        </html>
    );
}
