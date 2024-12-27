import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Frontend Mentor | Space tourism website",
  description: "Space tourism website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative overflow-hidden">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
