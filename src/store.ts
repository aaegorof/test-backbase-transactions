import {
  createEntityAdapter,
  createSlice,
  configureStore
} from '@reduxjs/toolkit'
import transactionsSlice from './slices/transactionsSlice'

const store = configureStore({
  reducer: {
    transactions: transactionsSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export default store
