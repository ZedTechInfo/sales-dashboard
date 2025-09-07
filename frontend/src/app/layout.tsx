import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";

export const metadata: Metadata = {
  title: "Sales Dashboard",
  description: "Dashboard interface to showcase sales metrics and insights across various departments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
