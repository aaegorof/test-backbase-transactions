import { createSlice } from "@reduxjs/toolkit";

export interface InputOptions {
  label: string;
  value: string | number;
  disabled?: boolean;
  placeholder?: string;
  options?: any;
  message?: string;
  type?: string;
}

export interface TransformForm {
  [key: string]: any;
  from: InputOptions;
  to: InputOptions;
  amount: InputOptions;
}
export interface TransformInitialState {
  form: TransformForm;
  account: {
    name: string;
    money: number;
  };
}

const MAXOVERDRAFT = 500
const CURRENTMONEY = 5824


const INITIALSTATE: TransformInitialState = {
  account: {
    name: "Free Checking",
    money: CURRENTMONEY,
  },
  form: {
    from: {
      value: "",
      disabled: true,
      label: "From account",
      placeholder: "Choose account",
      options: {
        required: {
          value: true,
          message: "Is Required",
        },
      },
    },
    to: {
      value: "",
      label: "To account",
      placeholder: "Choose account",
      message: "Is Required",
      options: {
        required: {
          value: true,
          message: "Is Required",
        },
      },
    },
    amount: {
      value: "",
      label: "Amount",
      placeholder: "0.00",
      message: "Is Required",
      type: "number",
      options: {
        valueAsNumber: true,
        required: {
          value: true,
          message: "Is Required",
        },
        max: {
          value: CURRENTMONEY + MAXOVERDRAFT,
          message: "You dont have that",
        },
        min: {
          value: 0,
          message: "Should be more then 0",
        },
      },
    },
  },
};

export const tranferSlice = createSlice({
  name: "transform",
  initialState: INITIALSTATE,
  reducers: {
    // Can pass adapter functions directly as case reducers.  Because we're passing this
    // as a value, `createSlice` will auto-generate the `bookAdded` action type / creator
    //transactionAdded: (state, action) => state.concaaction.payload),
    changeFormValue: (state, action) => {},
    changeAmount: (state, action) => {
        const newAmount = state.account.money - action.payload
        state.account.money = newAmount;
        state.form.amount.options.max.value = newAmount + MAXOVERDRAFT
    },
  },
});

export const { changeFormValue, changeAmount } = tranferSlice.actions;
export default tranferSlice.reducer;
