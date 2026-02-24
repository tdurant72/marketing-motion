import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Script from "next/script";
const font = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NCGTP",
  description: "North Carolina Global TransPark - A premier logistics and aerospace hub designed to accelerate business growth and innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="org-jsonld" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "NCGTP - North Carolina Global TransPark",
              "url": "https://www.ncgtp.com/",
              "telephone": "+1-555-555-5555",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 TransPark Dr",
                "addressLocality": "Kinston",
                "addressRegion": "NC",
                "postalCode": "28504",
                "addressCountry": "US"
              },
              "logo": "https://www.ncgtp.com/og-image-ncgtp.png"
            }
          `}
        </Script>
      </head>
      <body
        className={font.className}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
