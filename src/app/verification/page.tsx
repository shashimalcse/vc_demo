import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function VerificationPage() {
  return (
    <main>
      <section className="min-h-[calc(100vh-8rem)] flex items-center justify-center bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto mb-8 h-20 w-20 rounded-2xl bg-wso2-orange/10 flex items-center justify-center">
            <ShieldCheck className="h-10 w-10 text-wso2-orange" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Credential Verification
          </h1>

          <p className="text-lg text-slate-600 mb-4 leading-relaxed">
            <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600 mb-4">
              Coming Soon
            </span>
          </p>

          <p className="text-base text-gray-500 max-w-lg mx-auto mb-10 leading-relaxed">
            We&apos;re building support for verifying credentials presented by
            holders using open standards. Stay tuned for updates on OID4VP-based
            credential verification.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/issuance"
              className="inline-flex items-center gap-2 rounded-full bg-wso2-orange px-8 py-3 text-sm font-semibold text-white hover:bg-wso2-orange-light transition-all"
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
          </div>
        </div>
      </section>
    </main>
  );
}
