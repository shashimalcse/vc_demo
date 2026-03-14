"use client";

import { useState } from "react";
import {
  GraduationCap,
  UserCheck,
  Users,
  Award,
  FileCheck,
  CreditCard,
  Copy,
  Check,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { QRCodeDisplay } from "@/components/qr-code-display";
import { Credential, CredentialType } from "@/types/credential";

const typeConfig: Record<CredentialType, { icon: React.ElementType; color: string }> = {
  degree: { icon: GraduationCap, color: "text-blue-600" },
  identity: { icon: UserCheck, color: "text-green-600" },
  membership: { icon: Users, color: "text-purple-600" },
  certificate: { icon: Award, color: "text-yellow-600" },
  license: { icon: FileCheck, color: "text-cyan-600" },
  generic: { icon: CreditCard, color: "text-gray-500" },
};

export function CredentialCard({ credential }: { credential: Credential }) {
  const [copied, setCopied] = useState(false);
  const [showUri, setShowUri] = useState(false);
  const config = typeConfig[credential.type];
  const Icon = config.icon;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(credential.offerUri);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm overflow-hidden">
      {/* Two-column layout: info left, QR right */}
      <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:gap-10">
        {/* Left column — credential info */}
        <div className="flex-1 mt-6 sm:mt-0">
          <div className="flex items-center gap-3 mb-3">
            <div className={`p-2.5 rounded-lg bg-gray-100 ${config.color}`}>
              <Icon className="h-6 w-6" />
            </div>
            <Badge variant="outline" className="text-xs border-gray-200 text-gray-500">
              {credential.type}
            </Badge>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            {credential.name}
          </h3>

          {credential.description && (
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              {credential.description}
            </p>
          )}

          {/* Action buttons */}
          <div className="flex gap-2">
            {/* Open in Wallet — visible on mobile, hidden on desktop */}
            <a
              href={credential.offerUri}
              className="sm:hidden flex flex-1 items-center justify-center gap-2 rounded-lg bg-wso2-orange px-4 py-2.5 text-sm font-medium text-white hover:bg-wso2-orange-light transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Open in Wallet
            </a>

            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className="flex-1 sm:flex-none border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              {copied ? (
                <Check className="h-4 w-4 mr-2 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 mr-2" />
              )}
              {copied ? "Copied!" : "Copy URI"}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowUri(!showUri)}
              className="text-gray-400 hover:text-gray-900 hover:bg-gray-100"
            >
              {showUri ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Right column — QR code with pulsing glow */}
        <div className="flex justify-center sm:flex-shrink-0 relative">
          <motion.div
            className="absolute inset-0 rounded-2xl bg-wso2-orange/10 blur-xl"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative rounded-2xl overflow-hidden shadow-sm">
            <QRCodeDisplay value={credential.offerUri} />
          </div>
        </div>
      </div>

      {/* Expandable URI — full-width footer */}
      {showUri && (
        <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-3 overflow-x-auto">
          <code className="text-xs text-gray-500 break-all">{credential.offerUri}</code>
        </div>
      )}
    </div>
  );
}
