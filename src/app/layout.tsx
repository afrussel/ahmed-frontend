import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "The Deep Work Blueprint | Master Focus & Boost Productivity",
    description: "Master focus & eliminate procrastination with The Deep Work Blueprint. 6h+ video course, templates & live Q&As. Join 5K+ students. Save 30% now!",
    keywords: ["deep work", "focus course", "productivity", "eliminate procrastination", "time management"],
    authors: [{ name: "PPA" }],
    openGraph: {
        title: "The Deep Work Blueprint | Master Focus & Boost Productivity",
        description: "Master focus & eliminate procrastination with The Deep Work Blueprint. 6h+ video course, templates & live Q&As.",
        url: "https://yourdomain.com",
        siteName: "PPA - Deep Work Blueprint",
        locale: "en_US",
        type: "website",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
