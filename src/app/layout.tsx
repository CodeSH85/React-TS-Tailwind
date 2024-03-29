import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'React + Tailwinds',
  description: 'My App is a...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div id="root">{children}</div>
      </body>
    </html>
  )  
}