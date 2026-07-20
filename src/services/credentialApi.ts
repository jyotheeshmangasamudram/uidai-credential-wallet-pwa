import { mockCredentials } from "../mocks/credentials";
import { type Credential } from "../types/credential";

export const getCredentials = (): Promise<Credential[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockCredentials);
    }, 1500);
  });
};