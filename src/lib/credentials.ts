import { Credential, CredentialType } from "@/types/credential";

const VALID_TYPES: CredentialType[] = ["degree", "identity", "membership", "certificate", "license", "generic"];

function isValidType(type: string): type is CredentialType {
  return VALID_TYPES.includes(type as CredentialType);
}

export function getCredential(): Credential | null {
  const name = process.env.NEXT_PUBLIC_CREDENTIAL_NAME;
  const description = process.env.NEXT_PUBLIC_CREDENTIAL_DESCRIPTION;
  const offerUri = process.env.NEXT_PUBLIC_CREDENTIAL_OFFER_URI;
  const rawType = process.env.NEXT_PUBLIC_CREDENTIAL_TYPE || "generic";

  if (!name || !offerUri) return null;

  return {
    id: 1,
    name,
    description: description || "",
    offerUri,
    type: isValidType(rawType) ? rawType : "generic",
  };
}
