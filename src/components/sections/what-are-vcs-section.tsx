"use client";

import { Shield, Lock, UserCheck, Globe } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { StaggerContainer } from "@/components/motion/stagger-container";
import { StaggerItem } from "@/components/motion/stagger-item";

const points = [
  {
    icon: Shield,
    title: "Tamper-Proof",
    description: "Cryptographically signed, ensuring data integrity and authenticity.",
  },
  {
    icon: Lock,
    title: "Privacy-Preserving",
    description: "Share only what's needed through selective disclosure.",
  },
  {
    icon: UserCheck,
    title: "Holder-Controlled",
    description: "You own and manage your credentials in your digital wallet.",
  },
  {
    icon: Globe,
    title: "W3C Standards",
    description: "Built on open standards for global interoperability.",
  },
];

function AnimatedTrustTriangle() {
  const prefersReduced = useReducedMotion();

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: i * 0.3, ease: "easeOut" as const },
    }),
  };

  const labelVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { duration: 0.4, delay: 0.6 + i * 0.3 },
    }),
  };

  if (prefersReduced) {
    return <TrustTriangleStatic />;
  }

  return (
    <div
      className="relative w-full max-w-[500px] mx-auto aspect-square mt-12 lg:mt-0"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        className="w-full h-full animate-float-3d relative"
        style={{ transformStyle: "preserve-3d" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* SVG connecting lines */}
        <svg
          className="absolute inset-0 w-full h-full -z-10"
          viewBox="0 0 100 100"
        >
          {/* Base triangle (faint gray) */}
          <path d="M 50,70 L 75,20 L 25,20 Z" className="animate-edge-base" vectorEffect="non-scaling-stroke" />

          {/* Single orange electric pulse */}
          <path d="M 50,70 L 75,20 L 25,20 Z" className="electric-pulse" pathLength="100" vectorEffect="non-scaling-stroke" />
        </svg>

        {/* Verifier Node — top left */}
        <motion.div
          className="absolute top-[10%] left-[5%] flex flex-col items-center w-32"
          custom={0} variants={nodeVariants}
        >
          <div className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-transform duration-500 hover:scale-105">
            <Globe className="w-8 h-8 text-gray-600" />
          </div>
          <div className="mt-4 text-center">
            <div className="text-lg font-medium text-gray-900 tracking-tight">Verifier</div>
            <div className="text-xs text-gray-400 mt-0.5">Checks trust</div>
          </div>
        </motion.div>

        {/* Holder Node — top right */}
        <motion.div
          className="absolute top-[10%] right-[5%] flex flex-col items-center w-32"
          custom={1} variants={nodeVariants}
        >
          <div className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-transform duration-500 hover:scale-105">
            <UserCheck className="w-8 h-8 text-gray-600" />
          </div>
          <div className="mt-4 text-center">
            <div className="text-lg font-medium text-gray-900 tracking-tight">Holder</div>
            <div className="text-xs text-gray-400 mt-0.5">Stores &amp; shares</div>
          </div>
        </motion.div>

        {/* Issuer Node — bottom center */}
        <motion.div
          className="absolute bottom-[10%] left-1/2 -translate-x-1/2 flex flex-col items-center w-32"
          custom={2} variants={nodeVariants}
        >
          <div className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-transform duration-500 hover:scale-105">
            <Shield className="w-8 h-8 text-gray-600" />
          </div>
          <div className="mt-4 text-center">
            <div className="text-lg font-medium text-gray-900 tracking-tight">Issuer</div>
            <div className="text-xs text-gray-400 mt-0.5">Creates &amp; signs</div>
          </div>
        </motion.div>

        {/* Floating Text Labels */}
        {/* Top edge: Verifier ↔ Holder */}
        <motion.div
          className="absolute top-[15%] left-1/2 -translate-x-1/2 text-xs font-medium text-gray-400 tracking-wide"
          custom={0} variants={labelVariants}
        >
          Presents proof
        </motion.div>
        {/* Left edge: Verifier ↔ Issuer — midpoint of (25,20)→(50,70) */}
        <motion.div
          className="absolute text-xs font-medium text-gray-400 tracking-wide"
          style={{ top: "49%", left: "35%", transform: "translate(-50%, -50%) rotate(64deg)" }}
          custom={1} variants={labelVariants}
        >
          Trusts issuer
        </motion.div>
        {/* Right edge: Holder ↔ Issuer — midpoint of (75,20)→(50,70) */}
        <motion.div
          className="absolute text-xs font-medium text-gray-400 tracking-wide"
          style={{ top: "49%", left: "65%", transform: "translate(-50%, -50%) rotate(-64deg)" }}
          custom={2} variants={labelVariants}
        >
          Issues credential
        </motion.div>
      </motion.div>
    </div>
  );
}

function TrustTriangleStatic() {
  return (
    <div
      className="relative w-full max-w-[500px] mx-auto aspect-square mt-12 lg:mt-0"
      style={{ perspective: "1200px" }}
    >
      <div
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d", transform: "translateY(0) rotateX(25deg) rotateY(-15deg) rotateZ(5deg)" }}
      >
        {/* SVG connecting lines */}
        <svg
          className="absolute inset-0 w-full h-full -z-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <line x1="50" y1="70" x2="75" y2="20" className="animate-edge-base" />
          <line x1="75" y1="20" x2="25" y2="20" className="animate-edge-base" />
          <line x1="25" y1="20" x2="50" y2="70" className="animate-edge-base" />
        </svg>

        {/* Verifier Node — top left */}
        <div className="absolute top-[10%] left-[5%] flex flex-col items-center w-32">
          <div className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
            <Globe className="w-8 h-8 text-gray-600" />
          </div>
          <div className="mt-4 text-center">
            <div className="text-lg font-medium text-gray-900 tracking-tight">Verifier</div>
            <div className="text-sm text-gray-400 mt-0.5">Checks trust</div>
          </div>
        </div>

        {/* Holder Node — top right */}
        <div className="absolute top-[10%] right-[5%] flex flex-col items-center w-32">
          <div className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
            <UserCheck className="w-8 h-8 text-gray-600" />
          </div>
          <div className="mt-4 text-center">
            <div className="text-lg font-medium text-gray-900 tracking-tight">Holder</div>
            <div className="text-sm text-gray-400 mt-0.5">Stores &amp; shares</div>
          </div>
        </div>

        {/* Issuer Node — bottom center */}
        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 flex flex-col items-center w-32">
          <div className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
            <Shield className="w-8 h-8 text-gray-600" />
          </div>
          <div className="mt-4 text-center">
            <div className="text-lg font-medium text-gray-900 tracking-tight">Issuer</div>
            <div className="text-sm text-gray-400 mt-0.5">Creates &amp; signs</div>
          </div>
        </div>

        {/* Floating Text Labels */}
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 text-xs font-medium text-gray-400 tracking-wide">
          Presents proof
        </div>
        <div className="absolute text-xs font-medium text-gray-400 tracking-wide" style={{ top: "42%", left: "30%", transform: "translate(-50%, -50%) rotate(-60deg)" }}>
          Trusts issuer
        </div>
        <div className="absolute text-xs font-medium text-gray-400 tracking-wide" style={{ top: "42%", left: "70%", transform: "translate(-50%, -50%) rotate(-60deg)" }}>
          Issues credential
        </div>
      </div>
    </div>
  );
}

export function WhatAreVCsSection() {
  return (
    <section id="what-are-vcs" className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="up">
            <span className="section-pill mb-4">Digital Trust</span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
              What Are <span className="text-wso2-orange">Verifiable Credentials</span>?
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Verifiable Credentials (VCs) are the digital equivalent of physical
              credentials — like a driver&apos;s license, university degree, or
              membership card — but cryptographically secure and machine-verifiable.
            </p>
            <StaggerContainer className="grid sm:grid-cols-2 gap-6">
              {points.map((point) => (
                <StaggerItem key={point.title}>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-wso2-orange/10 flex items-center justify-center">
                      <point.icon className="h-5 w-5 text-wso2-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{point.title}</h3>
                      <p className="text-sm text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollReveal>

          {/* Trust Triangle Diagram */}
          <div className="flex justify-center">
            <AnimatedTrustTriangle />
          </div>
        </div>
      </div>
    </section>
  );
}
