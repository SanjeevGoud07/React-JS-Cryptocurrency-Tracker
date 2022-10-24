import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrencyDetails} = props
  const {
    currencyLogoUrl,
    currencyName,
    usdValue,
    euroValue,
  } = cryptocurrencyDetails

  return (
    // <li className="cryptocurrency-item">
    //   <div className="logo-and-title-container">
    //     <img
    //       className="currency-logo"
    //       src={currencyLogoUrl}
    //       alt={currencyName}
    //     />
    //     <p className="currency-name">{currencyName}</p>
    //   </div>
    //   <div className="usd-and-euro-values-container">
    //     <p className="currency-value">{usdValue}</p>
    //     <p className="currency-value">{euroValue}</p>
    //   </div>
    // </li>

    <li className="Box">
      <img className="logo" src={currencyLogoUrl} alt={currencyName} />
      <h1 className="Head">{currencyName}</h1>
      <hr className="HR" />
      <div className="group">
        <div className="value">
          <p className="HV">USD</p>
          <p className="Para">{usdValue}</p>
        </div>
        <div className="value">
          <p className="HV">EURO</p>
          <p className="Para">{euroValue}</p>
        </div>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
