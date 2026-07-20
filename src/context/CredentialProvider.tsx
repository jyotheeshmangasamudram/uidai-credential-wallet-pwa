import { useEffect, useState, type ReactNode } from "react";
import { type Credential } from "../types/credential";
import { getCredentials } from "../services/credentialApi";
import { CredentialContext } from "./CredentialContext";

export const CredentialProvider = ({ children }: { children: ReactNode }) => {
  const [credentials, setCredentials] = useState<Credential[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refreshCredentials = async () => {
    try {
      const data = await getCredentials();
      setCredentials(data);
    } catch {
      setError("Failed to load credentials");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getCredentials();
        setCredentials(data);
      } catch {
        setError("Failed to load credentials");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <CredentialContext.Provider
      value={{
        credentials,
        loading,
        error,
        refreshCredentials,
      }}
    >
      {children}
    </CredentialContext.Provider>
  );
};
