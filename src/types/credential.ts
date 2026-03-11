export type CredentialType = "degree" | "identity" | "membership" | "certificate" | "license" | "generic";

export interface Credential {
  id: number;
  name: string;
  description: string;
  offerUri: string;
  type: CredentialType;
}
