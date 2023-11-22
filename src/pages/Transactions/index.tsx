import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import {
  PriceHighLight,
  TransactionsTable,
  TranscationsContainer,
} from './styles'
import { SearchForm } from './components/SearchForm'
import { useTransactions } from '../../hooks/useTransaction'

export const Transactions = () => {
  const { transactions } = useTransactions()

  return (
    <div>
      <Header />
      <Summary />

      <TranscationsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighLight variant={transaction.type}>
                    R$ {transaction.price}
                  </PriceHighLight>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TranscationsContainer>
    </div>
  )
}
