import blackStarHollow from "../Assets/Icons/blackStarHollow.svg";
// eslint-disable-next-line
import blackStarFilled from "../Assets/Icons/blackStarFilled.svg";

interface MarkFavouriteProps {

}
const MarkFavourite = (props: MarkFavouriteProps) => {
    return (
     <div className="iconContainer">
        <img src={blackStarHollow} alt="grey star"/>
        {/* <img src={blackStarFilled} alt="golden star"/> */}
     </div> 
    )
}
export default MarkFavourite;