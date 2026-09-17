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

export const metadata = {
    title: 'ZNS Nexus — Custom Web & SaaS Development',
    description: 'Digital product studio & agency specializing in custom web applications, SaaS development, and end-to-end product design.',
    verification: {
        google: 'google881b414d39e80350',
        other: {
            'google-site-verification': 'google881b414d39e80350.html',
        },
    },
    openGraph: {
        title: 'ZNS Nexus — Custom Web & SaaS Development',
        description: 'Digital product studio & agency specializing in custom web applications, SaaS development, and end-to-end product design.',
        url: 'https://ais-dev-h6ie32bfcr4tbj2tkah4pw-455569016805.asia-southeast1.run.app',
        siteName: 'ZNS Nexus',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'ZNS Nexus — Custom Web & SaaS Development',
        description: 'Digital product studio & agency specializing in custom web applications, SaaS development, and end-to-end product design.',
    },
    icons: {
        icon: 'https://cdn.prod.website-files.com/683703490bc01e1b8c052e06/68381362603d6402ee03c00e_favicon.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
