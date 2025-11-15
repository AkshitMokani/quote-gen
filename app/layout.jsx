import './globals.css'
import FarcasterMetaInject from '../components/FarcasterMetaInject'

const fcMiniappMeta = JSON.stringify({
  version: "1",
  imageUrl: "https://quotegen-omega.vercel.app/QuoteGen.png",
  button: {
    title: "Open QuoteGen",
    action: {
      type: "open_url",
      url: "https://quotegen-omega.vercel.app/"
    }
  }
})

export const metadata = {
  title: 'QuoteGen - Farcaster MiniApp',
  description: 'Generate blockchain quotes and share to Farcaster or X',
  openGraph: {
    title: 'QuoteGen - Farcaster MiniApp',
    description: 'Generate blockchain quotes and share to Farcaster or X',
    images: ['https://quotegen-omega.vercel.app/QuoteGen.png'],
    url: 'https://quotegen-omega.vercel.app',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuoteGen - Farcaster MiniApp',
    description: 'Generate blockchain quotes and share to Farcaster or X',
    images: ['https://quotegen-omega.vercel.app/QuoteGen.png'],
  },
  other: {
    'fc:miniapp': fcMiniappMeta,
    'fc:frame': fcMiniappMeta
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FarcasterMetaInject />
        {children}
      </body>
    </html>
  )
}
