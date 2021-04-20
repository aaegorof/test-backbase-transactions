import React, { useEffect, useState } from "react";
import TransactionItem from "../TransactionItem/TransactionItem";
import { ITransactionItem } from "../TransactionItem/types";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import TransactionFilters from "./TransactionFilters";
import {
  ascend,
  descend, Dictionary,
  filter as Rfilter,
  prop,
  sort,
} from "ramda";


const TransactionHistory: React.FC = () => {
  // @ts-ignore
  const {
    transactions: { entities, sortField, sortOrder, filteredText },
  } = useSelector((state: RootState) => state);
  const [sortedAndFilteredList, setSortedAndFilteredList] = useState<
    Array<ITransactionItem>
  >([]);

  useEffect(() => {
    // Change the string to number
    const preparedEntities = entities.map(entity => ({...entity, amount: +entity.amount}))

    const direction = sortOrder === 'desc' ? descend : ascend;
    const filterFunc = (item: ITransactionItem) => {
      return item.merchant.toLowerCase().includes(filteredText.toLowerCase())

    };

    const sortedArray = sortField ? sort(direction(prop(sortField as string)))(preparedEntities) : entities;
    // @ts-ignore
    const returnedArray = Rfilter(filterFunc, sortedArray);
    // if (filteredText) {
    //   returnedArray = entities.filter((entity) =>
    //     entity.merchant.toLowerCase().includes(filteredText)
    //   );
    // }


    setSortedAndFilteredList(returnedArray);
  }, [entities, sortField, sortOrder, filteredText]);

  return (
    <div className={"transaction-history-wrap"}>
      <TransactionFilters />
      {sortedAndFilteredList?.map((transaction: ITransactionItem) => (
        <TransactionItem
          key={transaction.transactionDate + transaction.amount}
          transaction={transaction}
        />
      ))}
    </div>
  );
};

export default TransactionHistory;
