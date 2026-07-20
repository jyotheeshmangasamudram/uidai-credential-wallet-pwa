type Props = {
  message: string;
};

const ErrorState = ({ message }: Props) => {
  return (
    <div className="error-state">
      {message}
    </div>
  );
};

export default ErrorState;
