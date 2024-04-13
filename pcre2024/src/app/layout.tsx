import type { Metadata } from "next";
import { Inter, Noto_Sans } from "next/font/google";
import "./globals.css";

// components
import Navbar from './components/Navbar.js'

const inter = Inter({ subsets: ["latin"], display: 'swap' });
const noto_sans = Noto_Sans({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "PCRE2024",
  description: "PCRE2024 Event Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto_sans.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
