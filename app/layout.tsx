import type { Metadata } from "next";
import { open_sans_400weight } from "@/fonts/fonts";
import "./globals.css";
import Navbar from "@/ui/navbar";

export const metadata: Metadata = {
  title: "T3D/BlazeVortex",
  description: "A Discord bot that isn't helpful.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${open_sans_400weight.className}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
