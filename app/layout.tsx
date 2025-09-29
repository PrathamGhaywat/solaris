import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";
import Bg from "@/components/bg";
import { Be_Vietnam_Pro } from "next/font/google";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Solaris - The most funded highschool hackathon",
  description: "Through our custom platform, Launchpad, we're leveraging that funding to empower every single participant. You will receive over $20,000 in enterprise-grade cloud resources from Google Cloud, completely free of charge, to build out your projects. Bring your biggest ideas—we'll provide the infrastructure to launch them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${beVietnamPro.className} antialiased overflow-x-hidden`}
      >
        <Bg />
        <Nav />
        {children}
      </body>
    </html>
  );
}
