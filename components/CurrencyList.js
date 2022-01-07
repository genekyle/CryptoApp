import Currencies from "./currencies"

export default function CurrencyList({filteredCurrencies}) {
    return (
    <>
    {filteredCurrencies.map(currency => {
        return (
            <Currencies 
                key={currency.id}
                name={currency.name}
                id={currency.id}
                price={currency.current_price}
                symbol={currency.symbol}
                marketcap={currency.market_cap}
                volume={currency.total_volume}
                image={currency.image}
                priceChange={currency.price_change_percentage_24h}/>
        )
    })} 
    </>
    )
}
