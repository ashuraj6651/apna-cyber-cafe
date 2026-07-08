import type { Metadata } from "next";
import { Space_Grotesk, Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-hindi",
  subsets: ["devanagari"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apna Cyber Cafe | आपका भरोसेमंद डिजिटल सेवा केंद्र - Sultanganj, Bihar",
  description:
    "Apna Cyber Cafe - Sultanganj, Bihar में आपका भरोसेमंद CSC डिजिटल सेवा केंद्र। Aadhaar, PAN Card, Passport, Banking, Insurance और अन्य सरकारी सेवाएं।",
  keywords: [
    "CSC", "Cyber Cafe", "Aadhaar", "PAN Card", "Passport", "Banking",
    "Sultanganj", "Bihar", "Apna Cyber Cafe", "Digital Service Center",
    "Common Service Center", "Government Services", "Online Form",
    "Insurance", "Bill Payment", "Voter ID", "Aadhaar Update",
  ],
  authors: [{ name: "Apna Cyber Cafe" }],
  icons: {
    icon: "/logo.jpg",
  },
  openGraph: {
    title: "Apna Cyber Cafe | आपका भरोसेमंद डिजिटल सेवा केंद्र",
    description:
      "Sultanganj, Bihar में सभी सरकारी एवं ऑनलाइन सेवाएं एक ही स्थान पर।",
    url: "https://apnacybercafe.com",
    siteName: "Apna Cyber Cafe",
    type: "website",
    locale: "hi_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apna Cyber Cafe | Sultanganj",
    description:
      "सभी सरकारी एवं ऑनलाइन सेवाएं एक ही स्थान पर। Aadhaar, PAN, Passport, Banking।",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Apna Cyber Cafe",
              image: "/logo.jpg",
              telephone: "+91 8271099312",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Sitarampur, Jichhopokhar Road, Adarsh Nagar, Pildauri",
                addressLocality: "Sultanganj",
                addressRegion: "Bihar",
                postalCode: "813213",
                addressCountry: "IN",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.3",
                reviewCount: "120",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "09:00",
                closes: "19:00",
              },
              priceRange: "₹₹",
              url: "https://maps.app.goo.gl/kAgB7Yo3EPcZXy2h6",
            }),
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${notoDevanagari.variable} antialiased`}
        style={{ fontFamily: "var(--font-body), var(--font-hindi), sans-serif" }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}