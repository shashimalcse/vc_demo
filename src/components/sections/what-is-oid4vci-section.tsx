"use client";

import { FileText, QrCode, Smartphone, CheckCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

const steps = [
  { icon: FileText, label: "Issuer creates offer", sub: "Credential Offer" },
  { icon: QrCode, label: "Encodes as QR code", sub: "QR / Deep Link" },
  { icon: Smartphone, label: "Wallet scans code", sub: "Wallet Request" },
  { icon: CheckCircle, label: "Credential received", sub: "VC Issued" },
];

export function WhatIsOID4VCISection() {
  const prefersReduced = useReducedMotion();

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: i * 0.2, ease: "easeOut" as const },
    }),
  };

  return (
    <section id="what-is-oid4vci" className="py-16 lg:py-20 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <span className="section-pill mb-4">Open Standard</span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            What Is <span className="text-wso2-orange">OID4VCI</span>?
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed max-w-3xl mx-auto">
            OpenID for Verifiable Credentials Issuance (OID4VCI) is an open standard
            that defines how digital wallets can receive verifiable credentials from
            issuers using the familiar OpenID Connect protocol family. It enables a seamless, standards-based experience that works across different wallet implementations.
          </p>
        </ScrollReveal>

        {/* 3D Flow Diagram */}
        <div
          className="relative w-full max-w-4xl mx-auto"
          style={{ perspective: "1200px" }}
        >
          <motion.div
            className={`w-full relative ${prefersReduced ? "" : "animate-float-3d"}`}
            style={{
              transformStyle: "preserve-3d",
              ...(prefersReduced ? { transform: "rotateX(25deg) rotateY(-15deg) rotateZ(5deg)" } : {}),
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* SVG connecting lines */}
            <svg
              className="absolute inset-0 w-full h-full -z-10"
              viewBox="0 0 800 200"
              preserveAspectRatio="xMidYMid meet"
            >
            </svg>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-4 py-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.label}
                  className="flex flex-col items-center text-center w-40"
                  custom={i}
                  variants={prefersReduced ? undefined : nodeVariants}
                >
                  <div className="relative w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-transform duration-500 hover:scale-105 mb-4">
                    <step.icon className="w-8 h-8 text-gray-600" />
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gray-200 text-gray-600 text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <div className="text-base font-medium text-gray-900 tracking-tight">{step.label}</div>
                  <div className="text-xs text-gray-400 mt-1">{step.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            This demo uses the{" "}
            <a
              href="https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-wso2-orange hover:underline"
            >
              OID4VCI specification
            </a>{" "}
            with an authorization code flow, where the user authenticates and
            authorizes credential issuance for a secure, consent-driven experience.
          </p>
        </div>
      </div>
    </section>
  );
}
