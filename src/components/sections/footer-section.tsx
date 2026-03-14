import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const externalLinks = [
  { label: "WSO2 Asgardeo", href: "https://wso2.com/asgardeo/" },
  { label: "FIDES Community", href: "https://fides.community" },
  { label: "OID4VCI Spec", href: "https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html" },
  { label: "WSO2 Identity Server", href: "https://wso2.com/identity-server/" },
];

const internalLinks = [
  { label: "Home", href: "/" },
  { label: "Issuance", href: "/issuance" },
  { label: "Verification", href: "/verification" },
];

export function FooterSection() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-500 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-wso2-orange flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="text-gray-900 font-semibold">Verifiable Credentials</span>
          </Link>

          <div className="flex flex-wrap justify-center gap-8">
            {internalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm hover:text-gray-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {externalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <Separator className="my-8 bg-gray-200" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} WSO2 LLC. All rights reserved.</p>
          <p>
            Powered by{" "}
            <a
              href="https://wso2.com/asgardeo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-wso2-orange hover:underline"
            >
              WSO2 Asgardeo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
