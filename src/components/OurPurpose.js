import Slider from 'react-slick'
import '../styles/OurPurpose.css'
import 'slick-carousel/slick/slick.css'
import girlComputer from '../assets/girlWithComputer.jpg'
import { useNavigate } from 'react-router-dom'

const PreviousBtn = (props) => {
  console.log(props)
  const { className, onClick } = props
  return (
    <div
      style={{ position: 'absolute', left: 10 }}
      className={className}
      onClick={onClick}
    ></div>
  )
}
const NextBtn = (props) => {
  const { className, onClick } = props
  return (
    <div
      style={{ position: 'absolute', right: 10 }}
      className={className}
      onClick={onClick}
    >
      {'&#x2190;'}
    </div>
  )
}

const OurPurpose = () => {
  return (
    <div className="purpose">
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: -30 }}
      >
        <div style={{ width: '90%', textAlign: 'center' }}>
          <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />}>
            <Card
              img={girlComputer}
              title="Our Purpose"
              desc="We help people get the most out of life"
            />
            <Card
              img={girlComputer}
              title="Our Purpose"
              desc="We help people get the most out of life"
            />
          </Slider>
        </div>
      </div>
      <div class="stockExchangeContainer">
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

const Card = ({ img, title, desc }) => {
  const navigate = useNavigate()
  return (
    <div className="cardContainer">
      <img src={img} className={'cardImage'} />
      <div className="cardDetailView">
        <p className="cardTitle">{title}</p>
        <p className="cardDesc">{desc}</p>
        <button
          onClick={() => {
            navigate('/home/PurposeDetail')
          }}
          className="redButton"
        >
          Find out more
        </button>
      </div>
    </div>
  )
}
export default OurPurpose
