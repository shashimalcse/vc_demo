import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-600" },
  green: { bg: "bg-green-50", border: "border-green-200", text: "text-green-600" },
  orange: { bg: "bg-wso2-orange/10", border: "border-wso2-orange/20", text: "text-wso2-orange" },
};

interface WalletCardProps {
  name: string;
  description: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  websiteUrl?: string;
  Icon?: LucideIcon;
  iconColor?: string;
}

function LinkButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center rounded-lg border border-border bg-background px-2.5 py-1.5 text-[0.8rem] font-medium hover:bg-muted transition-colors"
    >
      {children}
    </a>
  );
}

export function WalletCard({ name, description, appStoreUrl, playStoreUrl, websiteUrl, Icon, iconColor = "orange" }: WalletCardProps) {
  const colors = colorMap[iconColor] ?? colorMap.orange;

  return (
    <Card className="text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <CardContent className="pt-6 space-y-4">
        <div className={`w-16 h-16 mx-auto rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center`}>
          {Icon ? (
            <Icon className={`h-7 w-7 ${colors.text}`} />
          ) : (
            <span className="text-gray-700 font-bold text-2xl">{name[0]}</span>
          )}
        </div>
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {appStoreUrl && (
            <LinkButton href={appStoreUrl}>
              <ExternalLink className="h-3 w-3 mr-1" />
              App Store
            </LinkButton>
          )}
          {playStoreUrl && (
            <LinkButton href={playStoreUrl}>
              <ExternalLink className="h-3 w-3 mr-1" />
              Play Store
            </LinkButton>
          )}
          {websiteUrl && (
            <LinkButton href={websiteUrl}>
              <ExternalLink className="h-3 w-3 mr-1" />
              Website
            </LinkButton>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
