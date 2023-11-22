import { TransactionContext } from '../contexts/TransactionContext'
import { useContextSelector } from 'use-context-selector'

export const useCreateTransaction = () => {
  return useContextSelector(
    TransactionContext,
    (context) => context.createTransaction,
  )
}

export const useTransactions = () => {
  return useContextSelector(
    TransactionContext,
    (context) => context.transactions,
  )
}

export const useFetchTransactions = () => {
  return useContextSelector(
    TransactionContext,
    (context) => context.fetchTransactions,
  )
}
