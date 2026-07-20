import { type Credential } from "../types/credential";

export const mockCredentials: Credential[] = [
  {
    id: 1,
    type: "Aadhaar",
    holderName: "Jyotheesh M",
    credentialNumber: "123456789012",
    issuer: "UIDAI",
  },
  {
    id: 2,
    type: "PAN Card",
    holderName: "Jyotheesh M",
    credentialNumber: "ABCDE1234F",
    issuer: "Income Tax Department",
  },
  {
    id: 3,
    type: "Driving License",
    holderName: "Jyotheesh M",
    credentialNumber: "DL0123456789",
    issuer: "Transport Department",
  },
];
