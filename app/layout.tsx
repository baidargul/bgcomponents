import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AddNoise from "@/components/Experimental/_components/AddNoise";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "BG Components",
  description: "loving place to experiment something crazy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-site-text selection:bg-site-textSelection  selection:tracking-tighter`}
      >
        <AddNoise opacity={0.4} />
        {children}
      </body>
    </html>
  );
}
