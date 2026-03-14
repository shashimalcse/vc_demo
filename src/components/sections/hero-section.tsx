"use client";

import Link from "next/link";
import { ArrowDown, ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function HeroSection() {
  const prefersReduced = useReducedMotion();

  const item = (delay: number) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: "easeOut" as const },
        };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white dot-grid-bg overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.a
          href="https://fides.community"
          target="_blank"
          rel="noopener noreferrer"
          className="section-pill mb-8 hover:bg-wso2-orange/10 transition-colors"
          {...item(0)}
        >
          FIDES Community Reference Implementation
          <ExternalLink className="h-3 w-3" />
        </motion.a>

        <motion.h1
          className="text-5xl sm:text-6xl lg:text-8xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.1]"
          {...item(0.1)}
        >
          The Future of
          <br />
          <span className="text-wso2-orange">Digital Identity</span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          {...item(0.2)}
        >
          Experience the complete lifecycle of Verifiable Credentials — from
          issuance to verification. Built on open standards, powered by WSO2
          Asgardeo.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          {...item(0.3)}
        >
          <Link
            href="/issuance"
            className="inline-flex items-center justify-center rounded-full bg-wso2-orange px-8 py-3 text-sm font-semibold text-white hover:bg-wso2-orange-light transition-all shadow-lg shadow-wso2-orange/25 hover:shadow-xl hover:-translate-y-0.5"
          >
            Explore Issuance
          </Link>
          <a
            href="#what-are-vcs"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 px-8 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all"
          >
            Learn More
          </a>
        </motion.div>

        <motion.div
          className="mt-16"
          {...item(0.5)}
        >
          <motion.a
            href="#what-are-vcs"
            className="text-gray-400 hover:text-gray-500 inline-block"
            animate={prefersReduced ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-6 w-6 mx-auto" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
