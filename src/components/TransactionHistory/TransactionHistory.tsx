import React, { useState } from "react";
import fakeTransactions from "../../mock/transactions.json";
import TransactionItem from "../TransactionItem/TransactionItem";
import { ITransactionItem } from "../TransactionItem/types";

const TransactionHistory: React.FC = () => {
  const [transactions] = useState<ITransactionItem[]>(
    fakeTransactions.data
  );

  return (
    <div className={"transaction-history-wrap"}>
      {transactions?.map((transaction: ITransactionItem) => (
        <TransactionItem
          key={transaction.transactionDate + transaction.amount}
          transaction={transaction}
        />
      ))}
    </div>
  );
};

export default TransactionHistory;
