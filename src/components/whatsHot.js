import Card7 from "../assets/card-7.jpg";
import Card8 from "../assets/card-8.png";
import "../styles/whatsHot.css"

const whatsHot = () => {
    const hotList = [
        { id: 1, name: 'Our health and  wellbeing services', desc: "Pulse by Prudential, our health and wellbeing super-app, is transforming our business. Now available in 17 markets and 11 languages across Asia and Africa, Pulse has rapidly become one of Asia’s most popular health ecosystems", image: Card7 },
        { id: 2, name: 'Prudence Foundation', desc: "Prudence Foundation’s strategy is focused around health and resilience issues relevant to the communities in which we operate, education, particularly financial education, and building resilience across communities.", image: Card8 },
    ];
    return (
        <div className="mainContainer">
            <p className="title"><strong>What's Hot</strong></p>
            <div style={{ display: "flex", overflowY: 'auto'}}>
                {hotList.map(data => (
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
                <img src={data.image} className="cardImage"/>
                <div className="cardTextContainer">
                    <p style={{
                        marginLeft: 22,
                        fontSize: 20,
                        fontWeight: "bold"
                    }}>{data.name}</p>
                    <p style={{
                        marginLeft: 22,
                        fontSize: 18
                    }}>{data.desc}</p>
                </div>
            </div>
            <div style={{
                backgroundColor: "red",
                width: 30,
                height: 30,
                position: "absolute",
                right: 30,
                bottom: 5,
                borderRadius: 15
            }}>
                <span style={{
                    color: "white",
                    fontSize: 20,
                    marginLeft: 10,
                }}>{">"}</span>
            </div>

        </div>

    );
};
export default whatsHot;