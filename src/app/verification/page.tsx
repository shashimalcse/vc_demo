"use client";

import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function VerificationPage() {
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
    <main>
      <section className="min-h-[calc(100vh-8rem)] flex items-center justify-center bg-white dot-grid-bg">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="mx-auto mb-8 h-20 w-20 rounded-2xl bg-wso2-orange/10 flex items-center justify-center"
            {...item(0)}
          >
            <ShieldCheck className="h-10 w-10 text-wso2-orange" />
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight"
            {...item(0.1)}
          >
            Credential Verification
          </motion.h1>

          <motion.p className="text-lg text-slate-600 mb-4 leading-relaxed" {...item(0.2)}>
            <motion.span
              className="inline-block rounded-full bg-wso2-orange/10 border border-wso2-orange/20 px-3 py-1 text-sm font-medium text-wso2-orange mb-4"
              animate={prefersReduced ? {} : { scale: [1, 1.03, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Coming Soon
            </motion.span>
          </motion.p>

          <motion.p
            className="text-base text-gray-500 max-w-lg mx-auto mb-10 leading-relaxed"
            {...item(0.3)}
          >
            We&apos;re building support for verifying credentials presented by
            holders using open standards. Stay tuned for updates on OID4VP-based
            credential verification.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            {...item(0.4)}
          >
            <Link
              href="/issuance"
              className="inline-flex items-center gap-2 rounded-full bg-wso2-orange px-8 py-3 text-sm font-semibold text-white hover:bg-wso2-orange-light transition-all shadow-lg shadow-wso2-orange/25 hover:shadow-xl hover:-translate-y-0.5"
            >
              Explore Issuance
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-8 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
