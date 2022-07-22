import Card6 from "../assets/card-6.png";
import Card5 from "../assets/card-5.jpg";
import "../styles/whatsHot.css"

const whatsHot = () => {
    const hotList = [
        { id: 1, name: 'Inspire to dream big!!', desc: "Enjoy single premium discounts on selected insurance plans.", image: Card6 },
        { id: 2, name: 'We Do Family', desc: "Enjoy rewards of up to 15.0% of first-year premium on selected insurance plans.", image: Card5 },
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