import CredentialCard from "./CredentialCard";
import { type Credential } from "../types/credential";

type Props = {
  credentials: Credential[];
};

const CredentialList = ({ credentials }: Props) => {
  return (
    <div className="credential-grid">
      {credentials.map((item) => (
        <CredentialCard
          key={item.id}
          credential={item}
        />
      ))}
    </div>
  );
};

export default CredentialList;