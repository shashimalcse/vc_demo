import { Shield, Lock, UserCheck, Globe } from "lucide-react";

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

export function WhatAreVCsSection() {
  return (
    <section id="what-are-vcs" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-pill mb-4">Digital Trust</span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
              What Are <span className="text-wso2-orange">Verifiable Credentials</span>?
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Verifiable Credentials (VCs) are the digital equivalent of physical
              credentials — like a driver&apos;s license, university degree, or
              membership card — but cryptographically secure and machine-verifiable.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {points.map((point) => (
                <div key={point.title} className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    <point.icon className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{point.title}</h3>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Triangle Diagram */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              {/* Issuer */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center">
                <div className="w-20 h-20 rounded-full bg-wso2-orange/10 border-2 border-wso2-orange flex items-center justify-center mx-auto mb-2">
                  <Shield className="h-8 w-8 text-wso2-orange" />
                </div>
                <span className="font-semibold text-sm">Issuer</span>
                <p className="text-xs text-muted-foreground">Creates &amp; signs</p>
              </div>

              {/* Holder */}
              <div className="absolute bottom-0 left-0 text-center">
                <div className="w-20 h-20 rounded-full bg-blue-50 border-2 border-blue-500 flex items-center justify-center mx-auto mb-2">
                  <UserCheck className="h-8 w-8 text-blue-500" />
                </div>
                <span className="font-semibold text-sm">Holder</span>
                <p className="text-xs text-muted-foreground">Stores &amp; shares</p>
              </div>

              {/* Verifier */}
              <div className="absolute bottom-0 right-0 text-center">
                <div className="w-20 h-20 rounded-full bg-green-50 border-2 border-green-500 flex items-center justify-center mx-auto mb-2">
                  <Globe className="h-8 w-8 text-green-500" />
                </div>
                <span className="font-semibold text-sm">Verifier</span>
                <p className="text-xs text-muted-foreground">Checks &amp; trusts</p>
              </div>

              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                <line x1="160" y1="85" x2="60" y2="235" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 4" />
                <line x1="160" y1="85" x2="260" y2="235" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 4" />
                <line x1="60" y1="250" x2="260" y2="250" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
