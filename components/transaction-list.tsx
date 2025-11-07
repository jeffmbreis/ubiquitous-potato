import { TransactionProps, Transaction } from "./transaction";

type TransactionListProps = {
  transactions: TransactionProps[];
};

export const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <div>
      {transactions.map(({ amount, date, description, transactionId }) => (
        <Transaction
          key={transactionId}
          amount={amount}
          date={date}
          description={description}
          transactionId={transactionId}
        />
      ))}
    </div>
  );
};
