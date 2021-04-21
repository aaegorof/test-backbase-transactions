import {
  configureStore
} from '@reduxjs/toolkit'
import transactionsSlice from './slices/transactionsSlice'
import transformSlice from "./slices/tranferSlice";

const store = configureStore({
  reducer: {
    transactions: transactionsSlice,
    transfer: transformSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export default store
