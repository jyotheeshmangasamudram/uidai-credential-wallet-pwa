import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";
import EmptyState from "../components/EmptyState";
import CredentialList from "../components/CredentialList";
import { useCredentials } from "../context/useCredentials";

const Dashboard = () => {
  const {
    credentials,
    loading,
    error,
  } = useCredentials();

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1>Digital Credential Wallet</h1>

      {loading && <Loader />}

      {!loading && error && (
        <ErrorState message={error} />
      )}

      {!loading &&
        !error &&
        credentials.length === 0 && <EmptyState />}

      {!loading &&
        !error &&
        credentials.length > 0 && (
          <CredentialList credentials={credentials} />
        )}
    </div>
  );
};

export default Dashboard;