import styles from "./Currencies.module.css"
import Link from 'next/link'


const Currencies = ({name, price, symbol, marketcap, volume, image, priceChange, id}) => {
    return (
        <Link href='/Currency/[id]' as ={`/Currency/${id}`}>
            <a>
                <div className={styles.currency_container}>
                    <div className={styles.currency_row}>
                        <div className={styles.currency}>
                            <img src={image} alt={name} className={styles.currency_img}/>
                            <h1 className={styles.currency_h1}>{name}</h1>
                            <p className={styles.currency_symbol}>{symbol}</p> 
                        </div>
                        <div className={styles.currency_data}>
                            <p className={styles.currency_price}>${price}</p>
                            <p className={styles.currency_volume}>${volume.toLocaleString()}</p>

                            {priceChange < 0 ? (
                                <p className={styles.currency_percent, styles.red}>{priceChange.toFixed(2)}%</p>
                            ) : (
                                <p className={styles.currency_percent, styles.green}>{priceChange.toFixed(2)}%</p>
                            )}

                            <p className={styles.currency_marketcap}>
                                Mkt Cap: ${marketcap.toLocaleString()}
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default Currencies
