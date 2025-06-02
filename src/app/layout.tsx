import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import { Toaster } from '@/components/ui/sonner'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Rental App – Find Your Next Home',
    description:
        'Discover, compare, and rent apartments and houses with ease. Your next home is just a few clicks away.',
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
    openGraph: {
        title: 'Rental App – Find Your Next Home',
        description:
            'Explore apartments, houses, and short-term rentals tailored to your needs.',
        url: process.env.NEXT_PUBLIC_APP_URL,
        siteName: 'Rental App',
        images: [
            {
                url: '/logo.svg',
                width: 1200,
                height: 630,
                alt: 'Rental App Logo',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                suppressHydrationWarning
            >
                <Providers>{children}</Providers>
                <Toaster closeButton />
            </body>
        </html>
    )
}
