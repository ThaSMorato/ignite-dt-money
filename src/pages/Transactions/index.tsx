import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import {
  PriceHighLight,
  TransactionsTable,
  TranscationsContainer,
} from './styles'
import { SearchForm } from './components/SearchForm'

export const Transactions = () => {
  return (
    <div>
      <Header />
      <Summary />

      <TranscationsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hanburguer</td>
              <td>
                <PriceHighLight variant="outcome"> - R$ 59,00</PriceHighLight>
              </td>
              <td>Alimentacao</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TranscationsContainer>
    </div>
  )
}
