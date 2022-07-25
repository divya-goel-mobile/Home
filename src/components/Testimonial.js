import Slider from "react-slick";
import "../styles/Testimonial.css";
import "slick-carousel/slick/slick.css";


const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    return (
        <div style={{ position: "absolute", left: 10 }} className={className} onClick={onClick}>
        </div>
    );
};
const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div style={{position: "absolute", right: 10 }} className={className} onClick={onClick}>
            {"&#x2190;"}
        </div>
    );
};

const Testimonial = () => {
    return (
        <div>
            <div
                className="testimonial"
                style={{ display: "flex", justifyContent: "center", marginTop: -30 }}
            >
                <div style={{ width: "90%", textAlign: "center" }}>
                    <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} >
                        <Card img="https://www.prudential.com.sg/-/media/project/prudential/images/products/promotions/inspire-to-dream-big/carousel-inspiretodreambig2b.png?h=588&w=1440&hash=A57A83BBB7D80A3BCB35F85A373D5102" title="PRULink InvestGrowth" desc="An investment-linked plan that provides all-round flexibility that lets you build wealth your way." />
                        <Card img="https://www.prudential.com.sg/-/media/project/prudential/images/products/promotions/wedofamily/1360x560.jpg?h=560&w=1360&hash=CB8AC583F84E104980A520DEBB75F9E5" title="We Do Family" desc="Enjoy rewards of up to 15.0% of first-year premium on selected insurance plans" />
                        <Card img="https://www.prudential.com.sg/-/media/project/prudential/images/products/health-protection/medical/prushield/1366x540.jpg?h=540&w=1366&hash=C1096C5A5A99F96DE914ECA42A57C4EA" title="Inspire to Dream Big III" desc="Enjoy single premium discounts on selected insurance plans." />
                    </Slider>
                </div>
            </div>
            <div className="blueContainer">
                <p className="needHelp">Need help</p>
                <p className="whatYouNeed">finding what you need?</p>
                <div className="searchContainer">
                    <span className="seachIcon">&#x1F50E;</span>
                    <p>Search Products, topics, concerns and more...</p>
                </div>
            </div>
        </div>
    );
}

const Card = ({ img, title, desc }) => {
    return (
        <div className="cardContainer">
            <img
                src={img}
                className={"cardImage"}
            />
            <div className="cardDetailView">
                <p className="cardTitle">{title}</p>
                <p className="cardDesc">{desc}</p>
                <button className="redButton">Find out more</button>
            </div>
        </div>
    );
};
export default Testimonial;