import Card1 from "../assets/card-1.jpg";
import Card2 from "../assets/card-2.jpg";
import Card3 from "../assets/card-3.jpg";
import Card4 from "../assets/card-4.jpg";
import "../styles/yourGoal.css"

const YourGoal = () => {
    const goalList = [
        { id: 1, name: 'Health Protection', desc: "Our medical, personal accident and critical illness health protection insurance plans can help manage potential medical costs, so that you can focus on living your best life.", image: Card1 },
        { id: 2, name: 'Life Protection', desc: "Our life protection insurance plans help keep your family financially secure in the event of the unexpected, such as disability or death.", image: Card2 },
        { id: 3, name: 'Wealth Accumulation', desc: "Grow your wealth and steer towards your financial aspirations with our suite of savings, retirement and investment-linked insurance plans.", image: Card3 },
        { id: 4, name: 'Legacy Planning', desc: "Build your legacy plan with the potential to grow and preserve wealth towards a secure future that lasts for generations.", image: Card4 },
    ];
    return (

        <div className="mainGoalContainer">
            <p className="title"><strong>Your goals.</strong> Make them <br />happen.</p>
            <p className="desc">Let us help you find the right solutions to take care of<br />what’s important to you and your family.</p>
            <div style={{ display: "flex", overflow: 'auto' }}>
                {goalList.map(data => (
                    <Card key={data.id} data={data} />
                ))}
            </div>
        </div>
    );
}

const Card = ({ data }) => {
    return (
        <div className="cardMainContainer">
            <div className="cardInnerContainer">
                <img src={data.image} className="cardImage" />
                <p className="cardName">{data.name}</p>
                <p className="cardDesc">{data.desc}</p>
            </div>
            <div className="dotContainer">
                <span className="arrow">&#62;</span>
            </div>

        </div>

    );
};
export default YourGoal;