export enum TransactionType {
  Mint = 'MINT'
}

export type Transaction = {
  action: TransactionType
  hash: string
}
