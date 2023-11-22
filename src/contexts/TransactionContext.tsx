import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface Transaction {
  id: number
  description: string
  type: 'outcome' | 'income'
  price: number
  category: string
  createdAt: string
}

interface TransactionContextType {
  transactions: Transaction[]
}

interface TransactionProviderProps {
  children: ReactNode
}

const TransactionContext = createContext({} as TransactionContextType)

export const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    const loadTransactions = async () => {
      const response = await fetch('http://localhost:3333/transactions')
      const data = await response.json()
      setTransactions(data)
    }
    loadTransactions()
  }, [])

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  )
}

export const useTransactions = () => {
  return useContext(TransactionContext)
}
