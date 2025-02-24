"use client";

import "~/styles/globals.css";

import { Inter } from "next/font/google";
import TrpcProvider from './providers';
import { PowerSyncContext } from '@powersync/react';
import { useEffect } from 'react';
import { useSystem } from '~/server/system';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const system = useSystem();
  useEffect(() => {
    system.init()
  }, [])
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TrpcProvider>
          <PowerSyncContext.Provider value={system.powersync}>
            <main>{children}</main>
          </PowerSyncContext.Provider>
        </TrpcProvider>
      </body>
    </html>
  );
}