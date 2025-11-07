type ErrorMessageProps = {
  message: string;
};

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <div className="bg-red-400 p-4 text-white">{message}</div>;
};
