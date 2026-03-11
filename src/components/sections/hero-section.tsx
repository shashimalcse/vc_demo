import Link from "next/link";
import { ArrowDown, ExternalLink } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white dot-grid-bg overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <a
          href="https://fides.community"
          target="_blank"
          rel="noopener noreferrer"
          className="section-pill mb-8 hover:bg-gray-100 transition-colors"
        >
          FIDES Community Reference Implementation
          <ExternalLink className="h-3 w-3" />
        </a>

        <h1 className="text-7xl sm:text-6xl lg:text-8xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.1]">
          The Future of
          <br />
          <span className="text-wso2-orange">Digital Identity</span>
        </h1>

        <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Experience how Verifiable Credentials work — from issuance to
          verification. Powered by WSO2 Asgardeo, built on open standards.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/issuance"
            className="inline-flex items-center justify-center rounded-full bg-wso2-orange px-8 py-3 text-sm font-semibold text-white hover:bg-wso2-orange-light transition-all"
          >
            Explore Issuance
          </Link>
          <a
            href="#what-are-vcs"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 px-8 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all"
          >
            Learn More
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <a href="#what-are-vcs" className="text-gray-400 hover:text-gray-500">
            <ArrowDown className="h-6 w-6 mx-auto" />
          </a>
        </div>
      </div>
    </section>
  );
}
