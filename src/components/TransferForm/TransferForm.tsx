import React, { useEffect } from "react";
import Panel from "../Panel/Panel";
import arrows from "../../assets/icons/arrows.png";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { changeAmount } from "../../slices/tranferSlice";
import { addTransaction } from "../../slices/transactionsSlice";
import { RootState } from "../../store";
import Button from "../Button/Button";

const TransferForm: React.FC = () => {
  const { t } = useTranslation("transfer");
  const { form, account } = useSelector((state: RootState) => state.transfer);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      from: "",
      to: "",
      amount: "",
    },
  });
  useEffect(() => {
    setValue("from", `${account.name} – $${account.money}`);
  }, [account]);

  const values = watch();

  const onSubmit = (data: any) => {
    const isOk = window.confirm(
      t(`Please confirm the transaction of ${data.amount} to ${data.to}`)
    );
    if (isOk) {
      reset();
      const transaction = {
        amount: values.amount,
        categoryCode: "red",
        merchant: values.to,
        merchantLogo: "",
        transactionDate: new Date().getTime(),
        transactionType: "Transaction",
      };
      dispatch(changeAmount(data.amount));
      dispatch(addTransaction(transaction));
    }
  };

  return (
    <div className={"transfer-form-wrap"}>
      <Panel title={t("Make a Transfer")} icon={arrows} size={"small"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {Object.keys(form).map((key) => {
            const {
              label,
              options,
              placeholder,
              disabled,
              message,
              type,
            } = form[key];

            return (
              <div className={"input-block"} key={key}>
                <label htmlFor={key}>{t(label)}</label>
                <div className={"input-wrap"}>
                  <input
                    placeholder={t(placeholder)}
                    readOnly={disabled}
                    aria-label={key}
                    // @ts-ignore
                    aria-invalid={errors[key] ? "true" : "false"}
                    type={type || "text"}
                    min={options.min}
                    max={options.max}
                    style={{ color: account.money < 0 ? "red" : "inherit" }}
                    // @ts-ignore
                    {...register(key, { ...options, message })}
                  />
                  {
                    // @ts-ignore
                    !!values[key] && !disabled && type !== "number" && (
                      <div
                        className="clear"
                        // @ts-ignore
                        onClick={() => setValue(key, "")}
                      >
                        x
                      </div>
                    )
                  }
                  {errors && (
                    <div className={"error"}>
                      {
                        // @ts-ignore
                        errors[key]?.message
                      }
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          <div className="row">
            {/*<input type="submit" />*/}
            <Button
              type={"active"}
              shape={"rounded"}
              onClick={handleSubmit(onSubmit)}
              className={"mg-2-t"}
              isSubmit
              label={t("Submit")}
              style={{ minWidth: 200, marginLeft: "auto" }}
            >
              {t("Submit")}
            </Button>
          </div>
        </form>
      </Panel>
    </div>
  );
};

export default TransferForm;
