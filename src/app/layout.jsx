import './assets/styles/globals.css'

export const metadata = {
  title: "Layout panel demo",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-temptress bg-cotton-candy" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
