import './globals.css'

export const metadata = {
  title: 'QuoteGen - Farcaster MiniApp',
  description: 'Generate blockchain quotes and share to Farcaster or X'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
