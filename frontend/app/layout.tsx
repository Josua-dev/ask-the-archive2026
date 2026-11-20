import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {title:'Ask the Archive',description:'Organisational knowledge intelligence'}

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>
}
