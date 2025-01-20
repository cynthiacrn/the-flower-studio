import './assets/styles/globals.css'

export const metadata = {
  title: "The Flower Studio",
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
