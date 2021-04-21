import React, { useEffect, useState } from "react";
import TransactionItem from "../TransactionItem/TransactionItem";
import { ITransactionItem } from "../TransactionItem/types";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import TransactionFilters from "./TransactionFilters";
import { ascend, descend, filter as Rfilter, prop, sort } from "ramda";
import { useTranslation } from "react-i18next";

const TransactionHistory: React.FC = () => {
  // @ts-ignore
  const {
    transactions: { entities, sortField, sortOrder, filteredText },
  } = useSelector((state: RootState) => state);
  const [sortedAndFilteredList, setSortedAndFilteredList] = useState<
    Array<ITransactionItem>
  >([]);

  const { t } = useTranslation();

  useEffect(() => {
    // Change the string to number
    const preparedEntities = entities.map((entity) => ({
      ...entity,
      amount: +entity.amount,
    }));

    const direction = sortOrder === "desc" ? descend : ascend;
    const filterFunc = (item: ITransactionItem) => {
      return item.merchant.toLowerCase().includes(filteredText.toLowerCase());
    };

    const sortedArray = sortField
      ? sort(direction(prop(sortField as string)))(preparedEntities)
      : entities;
    // @ts-ignore
    const returnedArray = Rfilter(filterFunc, sortedArray);

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
      {sortedAndFilteredList.length < 1 && (
        <h2 className={"pd-3-v"}>
          {t("No results found. Try to change filters.")}
        </h2>
      )}
    </div>
  );
};

export default TransactionHistory;
