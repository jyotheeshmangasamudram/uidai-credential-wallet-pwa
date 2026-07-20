import { useContext } from "react";
import { CredentialContext } from "./CredentialContext";

export const useCredentials = () => {
  const context = useContext(CredentialContext);

  if (!context) {
    throw new Error(
      "useCredentials must be used within CredentialProvider"
    );
  }

  return context;
};