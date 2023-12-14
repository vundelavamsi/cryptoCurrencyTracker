// Write your JS code here
import CryptourrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {currenciesData} = props

  return (
    <div className="crypto-currency-container">
      <h1 className="heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="image"
      />
      <div className="cryptocurrency-table">
        <div className="cryptocurrency-info">
          <p className="coin-type">Coin Type</p>
          <div className="currency-info">
            <p className="currency-type">USD</p>
            <p className="currency-type">EURO</p>
          </div>
        </div>
        <ul className="cryptocurrency-list-container">
          {currenciesData.map(eachCurrency => (
            <CryptourrencyItem
              key={eachCurrency.id}
              eachCurrency={eachCurrency}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CryptocurrenciesList
