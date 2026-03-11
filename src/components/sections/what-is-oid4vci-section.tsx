import { FileText, QrCode, Smartphone, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  { icon: FileText, label: "Issuer creates offer", sub: "Credential Offer" },
  { icon: QrCode, label: "Encodes as QR code", sub: "QR / Deep Link" },
  { icon: Smartphone, label: "Wallet scans code", sub: "Wallet Request" },
  { icon: CheckCircle, label: "Credential received", sub: "VC Issued" },
];

export function WhatIsOID4VCISection() {
  return (
    <section id="what-is-oid4vci" className="py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-pill mb-4">Open Standard</span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            What Is <span className="text-wso2-orange">OID4VCI</span>?
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed max-w-3xl mx-auto">
            OpenID for Verifiable Credentials Issuance (OID4VCI) is an open standard
            that defines how digital wallets can receive verifiable credentials from
            issuers using the familiar OpenID Connect protocol family.
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2 sm:gap-4">
              <div className="flex flex-col items-center text-center min-w-[140px]">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border flex items-center justify-center mb-3">
                  <step.icon className="h-7 w-7 text-wso2-orange" />
                </div>
                <span className="text-sm font-medium">{step.label}</span>
                <span className="text-xs text-muted-foreground mt-1">{step.sub}</span>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="h-5 w-5 text-muted-foreground hidden sm:block flex-shrink-0" />
              )}
            </div>
          ))}
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
            with a pre-authorized code flow, where the credential offer is encoded
            directly in the QR code for a seamless user experience.
          </p>
        </div>
      </div>
    </section>
  );
}
