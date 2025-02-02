"use client";

import "~/styles/globals.css";

import { Inter } from "next/font/google";
import TrpcProvider from './providers';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TrpcProvider>
          <main>{children}</main>
        </TrpcProvider>
      </body>
    </html>
  );
}