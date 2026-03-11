import { Credential } from "@/types/credential";
import { CredentialCard } from "@/components/credential-card";

interface CredentialsSectionProps {
  credential: Credential | null;
}

export function CredentialsSection({ credential }: CredentialsSectionProps) {
  if (!credential) {
    return (
      <section id="credentials" className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-pill mb-4">Try It</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Try It <span className="text-wso2-orange">Now</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            No credential configured. Set up environment variables to display a credential offer.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="credentials" className="py-20 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-pill mb-4">Try It</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Try It <span className="text-wso2-orange">Now</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mx-auto">
            Scan the QR code below with your OID4VCI-compatible wallet to receive a
            verifiable credential. On mobile, tap &quot;Open in Wallet&quot; instead.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <CredentialCard credential={credential} />
        </div>
      </div>
    </section>
  );
}
