import { JivoChatWidget, VLibrasWidget } from '@/components';
import { integrations } from '@/constants';
import { siteMetadata } from '@/constants/metadata';
import { montserrat } from '@/styles/fonts';
import { GoogleTagManager } from '@next/third-parties/google';
import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  category: siteMetadata.category,
  description: siteMetadata.description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body
        className={`${montserrat.className} min-h-screen scroll-smooth select-none`}
      >
        {children}

        <VLibrasWidget />
        <JivoChatWidget />
      </body>

      <GoogleTagManager gtmId={integrations.googleTagManagerId} />
    </html>
  );
}
