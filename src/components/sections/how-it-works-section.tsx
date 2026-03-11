import { StepCard } from "@/components/step-card";

const steps = [
  {
    number: 1,
    title: "Choose a Credential",
    description: "Browse the available verifiable credentials below and pick one to receive.",
  },
  {
    number: 2,
    title: "Scan the QR Code",
    description: "Open your OID4VCI-compatible wallet app and scan the QR code displayed.",
  },
  {
    number: 3,
    title: "Accept the Credential",
    description: "Review the credential details in your wallet and accept the issuance.",
  },
  {
    number: 4,
    title: "Present Anywhere",
    description: "Use your new verifiable credential to prove claims to any verifier.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-pill mb-4">Getting Started</span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            How It <span className="text-wso2-orange">Works</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto">
            Getting a verifiable credential is simple. Follow these four steps to
            receive your first credential.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
