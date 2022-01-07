import Layout from '../../components/Layout'
import styles from './Currency.module.css'

const Currency = ({currency}) => {
    return (
        <Layout>
            <div className={styles.currency_page}>
                <div className={styles.currency_container}>
                    <img src={currency.image.large} alt={currency.name} className={styles.currency_image}/>
                    <h1 className={styles.currency_name}>{currency.name}</h1>
                    <p className={styles.currency_ticker}>{currency.symbol}</p>
                    <p className={styles.currency_current}>{currency.market_data.current_price.usd} USD</p>
                </div>
            </div>
        </Layout>
    )
}

export default Currency

export async function getServerSideProps(context) {
    const {id} = context.query

    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)

    const data = await res.json()

    return {
        props: {
            currency: data
        }
    }
}
