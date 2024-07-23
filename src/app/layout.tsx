import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Emoji Memory Game',
    description:
        'The Emoji Memory Game is a playful and engaging card-matching game where players flip over emoji cards to find and match pairs. It challenges memory and concentration skills with a variety of colorful and expressive emojis, making it a fun experience for players of all ages',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={quicksand.className} suppressHydrationWarning>
                {children}
            </body>
        </html>
    )
}
