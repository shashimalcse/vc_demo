import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/sections/footer-section";
import "./globals.css";

export const metadata: Metadata = {
  title: "Verifiable Credentials Demo | WSO2 Asgardeo",
  description:
    "Experience how Verifiable Credentials work — from issuance to verification. Powered by WSO2 Asgardeo using open standards like OID4VCI.",
  openGraph: {
    title: "Verifiable Credentials Demo | WSO2 Asgardeo",
    description:
      "Experience how Verifiable Credentials work — from issuance to verification. Powered by WSO2 Asgardeo using open standards like OID4VCI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
