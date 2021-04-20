export interface ITransactionItem {
    [key: string]: any
    amount: string
    categoryCode: string
    merchant: string
    merchantLogo: string
    transactionDate: number
    transactionType: string
}
