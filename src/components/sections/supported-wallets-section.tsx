"use client";

import { Wallet, Smartphone, Globe } from "lucide-react";
import { WalletCard } from "@/components/wallet-card";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { StaggerContainer } from "@/components/motion/stagger-container";
import { StaggerItem } from "@/components/motion/stagger-item";
import type { LucideIcon } from "lucide-react";

const wallets: {
  name: string;
  description: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  websiteUrl?: string;
  Icon: LucideIcon;
  iconColor: string;
}[] = [
  {
    name: "Lissi Wallet",
    description: "European-focused identity wallet with strong OID4VCI support.",
    appStoreUrl: "https://apps.apple.com/app/lissi-id-wallet/id1529848685",
    playStoreUrl: "https://play.google.com/store/apps/details?id=io.lissi.mobile.android",
    Icon: Wallet,
    iconColor: "blue",
  },
  {
    name: "Inji Wallet",
    description: "Open-source digital credential wallet by MOSIP.",
    appStoreUrl: "https://apps.apple.com/app/inji-wallet/id1658042988",
    playStoreUrl: "https://play.google.com/store/apps/details?id=io.mosip.residentapp",
    websiteUrl: "https://docs.mosip.io/inji",
    Icon: Smartphone,
    iconColor: "green",
  },
  {
    name: "Any OID4VCI Wallet",
    description: "Any wallet that supports the OID4VCI standard can receive these credentials.",
    websiteUrl: "https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html",
    Icon: Globe,
    iconColor: "orange",
  },
];

export function SupportedWalletsSection() {
  return (
    <section id="wallets" className="py-16 lg:py-20 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <span className="section-pill mb-4">Wallets</span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Supported <span className="text-wso2-orange">Wallets</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto">
            Use any of these OID4VCI-compatible wallets to scan the QR codes and
            receive your verifiable credentials.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {wallets.map((wallet) => (
            <StaggerItem key={wallet.name}>
              <WalletCard {...wallet} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
