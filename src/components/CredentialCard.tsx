import { type Credential } from "../types/credential";
import SecureDataMask from "./SecureDataMask";

type Props = {
  credential: Credential;
};

const CredentialCard = ({ credential }: Props) => {
  return (
    <div className="card">
      <h3>{credential.type}</h3>

      <p>
        <strong>Holder:</strong> {credential.holderName}
      </p>

      <p>
        <strong>Number:</strong>
      </p>

      <SecureDataMask
        value={credential.credentialNumber}
      />

      <p>
        <strong>Issuer:</strong> {credential.issuer}
      </p>
    </div>
  );
};

export default CredentialCard;