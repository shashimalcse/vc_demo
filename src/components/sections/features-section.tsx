import Link from "next/link";
import { ArrowRight, FileCheck, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Credential Issuance",
    description:
      "Issue Verifiable Credentials using the OID4VCI standard. Scan QR codes with your digital wallet to receive credentials instantly.",
    href: "/issuance",
    icon: FileCheck,
    status: "Live",
    statusVariant: "default" as const,
  },
  {
    title: "Credential Verification",
    description:
      "Experience how credential verification works using open standards. Present and verify digital credentials seamlessly.",
    href: "/verification",
    icon: ShieldCheck,
    status: "Coming Soon",
    statusVariant: "secondary" as const,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-pill mb-4">Explore</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            See It in Action
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Experience how Verifiable Credentials work — from issuance to
            verification.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature) => (
            <Link
              key={feature.href}
              href={feature.href}
              className="group relative rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-none hover:border-gray-300 hover:bg-gray-100 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="h-12 w-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-gray-700" />
                </div>
                <Badge variant={feature.statusVariant}>{feature.status}</Badge>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {feature.description}
              </p>

              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-wso2-orange group-hover:gap-2.5 transition-all">
                Explore
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
