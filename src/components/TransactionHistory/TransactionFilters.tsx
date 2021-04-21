import React, { useState, MouseEventHandler } from "react";
import Button from "../Button/Button";
import { ITransactionItem } from "../TransactionItem/types";
import { useDispatch, useSelector } from "react-redux";
import {
  sortButtonClicked,
  filterTextAdded,
} from "../../slices/transactionsSlice";
import Input from "../Input/Input";
import { RootState } from "../../store";
import { useTranslation } from "react-i18next";
import "./style.scss";

const TransactionFilters: React.FC = () => {
  const [sortKeys] = useState<Array<keyof ITransactionItem>>([
    "transactionDate",
    "merchant",
    "amount",
  ]);

  const { t } = useTranslation(["transaction"]);

  const ButtonText: { [key: string]: string } = {
    transactionDate: t("Date"),
    merchant: t("Beneficiary"),
    amount: t("Amount"),
  };
  const dispatch = useDispatch();
  const { filteredText, sortField, sortOrder } = useSelector(
    (state: RootState) => state.transactions
  );

  const onSortBtnClick = (key: keyof ITransactionItem) => (
    e: MouseEventHandler
  ) => {
    dispatch(sortButtonClicked(key));
  };
  const onInputChange = (val: any) => {
    dispatch(filterTextAdded(val));
  };

  return (
    <div className={"transaction-filters-wrap mg-2-b"}>
      <div className="row">
        <div className="col-md-9 pd-md-2-r">
          <Input
            onChange={onInputChange}
            name={"filterText"}
            value={filteredText}
            placeholder={t("Search by typing...")}
          />
        </div>
        <div className="col-md-9 row mg-xs-2-t mg-lg-0-t">
          <div className={"sorter-holder"}>
            <div className={"sort-by-label"}>{t("Sort By")}</div>
            <div>
              {sortKeys.map((key) => (
                <Button
                  onClick={onSortBtnClick(key)}
                  key={key}
                  label={ButtonText[key]}
                >
                  {ButtonText[key]}
                  {sortField === key && (
                    <div className={`arrow ${sortOrder}`} />
                  )}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionFilters;
