"use client";

import Link from "next/link";
import { ArrowRight, FileCheck, ShieldCheck } from "lucide-react";
import { StaggerContainer } from "@/components/motion/stagger-container";
import { StaggerItem } from "@/components/motion/stagger-item";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

const features = [
  {
    title: "Credential Issuance",
    description:
      "Issue Verifiable Credentials using the OID4VCI standard. Scan QR codes with your digital wallet to receive credentials instantly.",
    href: "/issuance",
    icon: FileCheck,
    status: "Live" as const,
  },
  {
    title: "Credential Verification",
    description:
      "Verify credentials presented by holders using OID4VP. Cryptographically validate authenticity without contacting the issuer.",
    href: "/verification",
    icon: ShieldCheck,
    status: "Coming Soon" as const,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="section-pill mb-4">Explore</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            See It in Action
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Experience how Verifiable Credentials work — from issuance to
            verification.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature) => (
            <StaggerItem key={feature.href}>
              <Link
                href={feature.href}
                className="group relative block rounded-2xl bg-white border border-gray-200/60 shadow-sm p-8 hover:shadow-xl hover:shadow-wso2-orange/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Orange gradient top border */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-wso2-orange to-wso2-orange-light" />

                <div className="flex items-start justify-between mb-4">
                  <div className="h-12 w-12 rounded-xl bg-wso2-orange/10 border border-wso2-orange/20 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-wso2-orange" />
                  </div>
                  {feature.status === "Live" ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 border border-green-200 px-2.5 py-0.5 text-xs font-medium text-green-700">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                      </span>
                      Live
                    </span>
                  ) : (
                    <span className="inline-flex items-center rounded-full bg-amber-50 border border-amber-200 px-2.5 py-0.5 text-xs font-medium text-amber-600">
                      Coming Soon
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-wso2-orange group-hover:gap-2.5 transition-all">
                  Explore
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
