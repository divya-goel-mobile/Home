import Card1 from '../assets/card-1.jpg'
import Card2 from '../assets/card-2.jpg'
import Card3 from '../assets/card-3.jpg'
import Card4 from '../assets/card-4.jpg'
import { useNavigate } from 'react-router-dom'

import '../styles/yourGoal.css'

const YourGoal = () => {
  const goalList = [
    {
      id: 1,
      name: 'ESG at Prudential',
      desc: 'Creating a better future together with you...',
      image: Card1,
    },
    {
      id: 2,
      name: 'ESG at Prudential',
      desc: 'How we manage our direct impact on the environment',
      image: Card2,
    },
    {
      id: 3,
      name: 'ESG at Prudential',
      desc: 'How we make a difference through Responsible Investing',
      image: Card3,
    },
  ]
  return (
    <div className="mainGoalContainer">
      <p className="title">
        <strong>Insights</strong>
      </p>
      <p className="desc">
        Prudential plc provides life and health insurance and asset management,
        with a focus on Asia and Africa. We help people get the most out of
        life, by making healthcare affordable and accessible and by promoting
        financial inclusion. We protect people’s wealth, help them grow their
        assets, and empower them to save for their goals. The business has more
        than 18 million customers in Asia and Africa. We are no longer
        affiliated with Prudential UK and Europe (Prudential Assurance Company
        Ltd), as this business became part of M&G plc in October 2019. Customers
        and advisers of Prudential UK and Europe should visit www.pru.co.uk for
        information and contact details for this business.
      </p>
      <div style={{ display: 'flex', overflow: 'auto' }}>
        {goalList.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </div>
  )
}

const Card = ({ data }) => {
  const navigate = useNavigate()
  return (
    <div className="cardMainContainer">
      <div className="cardInnerContainer">
        <img src={data.image} className="cardImage" />
        <p className="cardName">{data.name}</p>
        <p className="cardDesc">{data.desc}</p>
      </div>
      <button
        onClick={() => {
          navigate('/home/insightDetail')
        }}
        className="dotContainer"
      >
        <div className="arrow">&#62;</div>
      </button>
    </div>
  )
}
export default YourGoal
