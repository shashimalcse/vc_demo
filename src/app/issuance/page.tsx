"use client";

import { WhatIsOID4VCISection } from "@/components/sections/what-is-oid4vci-section";
import { CredentialsSection } from "@/components/sections/credentials-section";
import { SupportedWalletsSection } from "@/components/sections/supported-wallets-section";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { getCredential } from "@/lib/credentials";

export default function IssuancePage() {
  const credential = getCredential();

  return (
    <main>
      {/* Compact page header */}
      <section className="bg-white border-b border-gray-100 pt-28 pb-16">
        <ScrollReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Credential <span className="text-wso2-orange">Issuance</span>
          </h1>
          <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Issue Verifiable Credentials using the OID4VCI standard. Scan QR
            codes with your digital wallet to receive credentials instantly.
          </p>
        </ScrollReveal>
      </section>

      <WhatIsOID4VCISection />
      <CredentialsSection credential={credential} />
      <SupportedWalletsSection />
    </main>
  );
}
