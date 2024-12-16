import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

import { Work_Sans, Mulish } from '@next/font/google';

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Adi UI Shop - Premium UI Templates & Icons",
  description:
    "Adi UI Shop offers premium UI templates and high-quality icons for designers and developers. Discover a wide range of resources to elevate your projects.",
  keywords: [
    "Adi UI Shop",
    "UI templates",
    "Icons",
    "Design resources",
    "Web design",
    "UI Kits",
    "Graphic assets",
    "Templates for developers",
    "Design tools",
  ],
  authors: [{ name: "Adi UI Shop Team", url: "https://www.adiuishop.com" }],
  openGraph: {
    title: "Adi UI Shop - Premium UI Templates & Icons",
    description:
      "Find premium UI templates and beautifully crafted icons at Adi UI Shop. Perfect for designers and developers looking for top-notch resources.",
    url: "https://www.adiuishop.com",
    type: "website",
    images: [
      {
        url: "https://www.adiuishop.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adi UI Shop homepage preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adi UI Shop - Premium UI Templates & Icons",
    description:
      "Discover high-quality UI templates and icons at Adi UI Shop. Enhance your design and development projects with premium resources.",
    images: ["https://www.adiuishop.com/images/twitter-image.jpg"],
    creator: "@adiuishop",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#0078FF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.className} ${mulish.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
