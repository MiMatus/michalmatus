import './style.linaria.global';

import { Roboto } from 'next/font/google';
import { ThemeWrapper } from '@michalspace/components/ThemeWrapper';
import { Header } from '@michalspace/components/Header';
import { Footer } from '@michalspace/components/Footer';
import { Panel } from '@michalspace/components/Panel';
import { Metadata } from 'next';

const roboto = Roboto({
    weight: ['300', '400', '900'],
    subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <ThemeWrapper>
                    <Panel>
                        <Header />
                        {children}
                        <Footer />
                    </Panel>
                </ThemeWrapper>
            </body>
        </html>
    );
}

export const metadata: Metadata = {
    title: 'Michal Matúš - Developer & Coffee lover',
    description: 'PHP Developer, GO Lover, Typescript enjoyer, Rust Admirer. World by Michal Matúš',
    viewport: {
        width: 'device-width',
        initialScale: 1,
    },
    icons: {
        icon: [
            {
                type: 'image/png',
                url: '/favicon-16x16.png',
                sizes: '16x16',
            },
            {
                type: 'image/png',
                url: '/favicon-32x32.png',
                sizes: '32x32',
            },
        ],
        apple: {
            type: 'image/png',
            url: '/apple-touch-icon.png',
            sizes: '180x180',
        },
    },
    themeColor: '#6e07f3',
    manifest: '/site.webmanifest',
};
