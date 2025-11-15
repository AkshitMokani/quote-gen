import './globals.css'
import FarcasterMeta from '../components/FarcasterMeta'

const fcMiniappContent = JSON.stringify({
  version: "1",
  imageUrl: "https://quotegen-omega.vercel.app/icon.png",
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
  other: {
    'fc:miniapp': fcMiniappContent
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FarcasterMeta />
        {children}
      </body>
    </html>
  )
}
