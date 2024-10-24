import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const pt_serif = PT_Serif({
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Aniruddha Chatterjee - Software Developer",
  description:
    "Fullstack Developer, Researching Optimized Solutions, Applying intelligence, Curious Tech Writer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${pt_serif.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
