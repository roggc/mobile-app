import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/header/header";
import CartProviderWrapper from "./cart-provider-wrapper";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mobile App",
  description: "Mobile App",
};

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-white dark:text-black`}
      >
        <CartProviderWrapper>
          <div className="flex flex-col h-screen">
            <Header />
            {children}
          </div>
        </CartProviderWrapper>
      </body>
    </html>
  );
}
