import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { ITransactionItem } from "../components/TransactionItem/types";
import fakeData from "../mock/transactions.json";

type SortOrder = "asc" | "desc" | null;
interface InitialState {
  entities: ITransactionItem[];
  sortOrder: SortOrder;
  sortField: keyof ITransactionItem | null;
  filteredText: string;
}

const INITIALSTATE: InitialState = {
  entities: fakeData?.data || [],
  sortOrder: null,
  sortField: null,
  filteredText: "",
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState: INITIALSTATE,
  reducers: {
    // Can pass adapter functions directly as case reducers.  Because we're passing this
    // as a value, `createSlice` will auto-generate the `bookAdded` action type / creator
    //transactionAdded: (state, action) => state.concat(action.payload),
    filterTextAdded: (state, action) => {
      state.filteredText = action.payload
    },
    sortButtonClicked: (state, action) => {
      const key = action.payload;
      const changedDirection = (orderBy: string) =>
        orderBy === "asc" ? "desc" : "asc";
      state.sortOrder =
        (state.sortField === key &&
          changedDirection(state.sortOrder as "asc" | "desc")) ||
        state.sortOrder ||
        "asc";
      state.sortField = key;
    },
  },
});

export const { sortButtonClicked, filterTextAdded } = transactionsSlice.actions;
export default transactionsSlice.reducer;
