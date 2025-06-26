import type { Metadata } from "next";
import { Be_Vietnam_Pro, Agdasima } from "next/font/google";
import "./globals.css";

const beVietnampro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["200", "300", "600"],
  variable: "--font-body",
});

const agdasima = Agdasima({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-button",
});

export const metadata: Metadata = {
  title: "Makeswift Mini",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${beVietnampro.variable} ${agdasima.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
