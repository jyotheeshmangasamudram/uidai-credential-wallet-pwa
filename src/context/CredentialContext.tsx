import {
  createContext,
} from "react";
import { type Credential } from "../types/credential";

type CredentialContextType = {
  credentials: Credential[];
  loading: boolean;
  error: string | null;
  refreshCredentials: () => Promise<void>;
};

export const CredentialContext = createContext<CredentialContextType | undefined>(
  undefined
);

