import '../styles/purposeDetail.css'
import girlComputer from '../assets/girlWithComputer.jpg'

const PurposeDetail = () => {
  return (
    <div className="purposeDetail">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={girlComputer} style={{ width: '50%' }} />
      </div>
      <div className="stockExchangeContainer">
        <div>
          <p className="stockExchangeDetail">London stock exchange</p>
          <p className="stockExchangeDetailValue">1,005.00 GBp</p>
        </div>
        <div>
          <p className="stockExchangeDetail">Hong Kong stock exchange</p>
          <p className="stockExchangeDetailValue">94.30 HKD</p>
        </div>
        <div>
          <p className="stockExchangeDetail">Singapore stock exchange</p>
          <p className="stockExchangeDetailValue">13.70 USD</p>
        </div>
        <div>
          <p className="stockExchangeDetail">New York stock exchange</p>
          <p className="stockExchangeDetailValue">24.47 USD</p>
        </div>
      </div>
    </div>
  )
}

export default PurposeDetail
