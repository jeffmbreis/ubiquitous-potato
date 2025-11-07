export type TransactionProps = {
  transactionId: number;
  date: string;
  description: string;
  amount: number;
};

export const Transaction = ({
  amount,
  date,
  description,
  transactionId,
}: TransactionProps) => {
  return (
    <div className="card border border-white">
      <h2>{transactionId}</h2>
      <h3>{description}</h3>
      <p>
        {date} - ${amount}
      </p>
    </div>
  );
};
