
import type { Metadata } from "next";
import {Outfit} from "next/font/google";
import "./globals.css";

import ConvexClientProvider from "@/app/convexClientProvider";
export const metadata: Metadata = {
  title: "ReelMind Ai",
  description: "Generated Short videoes with AI",
};
const font=Outfit({subsets:['latin']})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={font.className} 
      >
        <ConvexClientProvider>
         
        {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
