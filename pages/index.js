import {useState} from 'react'
import Layout from '../components/Layout'
import SearchBar from '../components/SearchBar'
import CurrencyList from '../components/CurrencyList'

export default function Home({ filteredCurrencies }) {
  const [search, setSearch] = useState('')

  const allCurrencies = filteredCurrencies.filter(currency => 
    currency.name.toLowerCase().includes(search.toLowerCase())
    )

  const handleChange = e => {
    e.preventDefault()

    setSearch(e.target.value.toLowerCase())
  }

  return (
    <Layout>
      <div className='currency_app'>
        <SearchBar type='text' placeholder='Search' onChange={handleChange}/>
        <CurrencyList filteredCurrencies={allCurrencies} />
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch ('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')

  const filteredCurrencies = await res.json();

  return {
    props: {
      filteredCurrencies
    }
  }
}
