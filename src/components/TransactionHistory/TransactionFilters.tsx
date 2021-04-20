import React, { useState, MouseEventHandler } from "react";
import Button from "../Button/Button";
import { ITransactionItem } from "../TransactionItem/types";
import {useDispatch} from "react-redux";
import {sortButtonClicked, filterTextAdded} from "../../slices/transactionsSlice";

type Props = {};

const TransactionFilters: React.FC<Props> = (props) => {
  const [sortKeys, setSortKeys] = useState<Array<keyof ITransactionItem>>([
    "transactionDate",
    "merchant",
    "amount",
  ]);
  const ButtonText: { [key: string]: string } = {
    transactionDate: "Date",
    merchant: "Beneficiary",
    amount: "Amount",
  };
  const dispatch = useDispatch()

  const onSortBtnClick = (key: keyof ITransactionItem) => (
    e: MouseEventHandler
  ) => {
      dispatch(sortButtonClicked(key))
  };
  const onInputChange = (e: any) => {
    console.log(e.target.value)
    dispatch(filterTextAdded(e.target.value))
  }

  return (
    <div className={"transaction-filters-wrap mg-2-b"}>
      <div className="row">
        <div className="col-md-9">
          <input onChange={onInputChange} />
        </div>
        <div className="col-md-9">
          {sortKeys.map((key) => (
            <Button onClick={onSortBtnClick(key)}>{ButtonText[key]}</Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionFilters;
