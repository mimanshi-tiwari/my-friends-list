import blackStarHollow from "../Assets/Icons/blackStarHollow.svg";
// eslint-disable-next-line
import blackStarFilled from "../Assets/Icons/blackStarFilled.svg";

interface MarkFavouriteProps {
    friendInfo: any;
    toggleFavourite: any;
}



const MarkFavourite = (props: MarkFavouriteProps) => {
    const { friendInfo, toggleFavourite } = props;
    const toggleFav = (friendId: string) => {
        toggleFavourite(friendId)
    }
    return (
        <div className="iconContainer">
            {friendInfo?.isFavourite ? (
                <button onClick={() => toggleFav(friendInfo.uuid)}>
                    <img src={blackStarFilled} alt="golden star" />
                </button>
            ) : (
                <button onClick={() => toggleFav(friendInfo.uuid)}>
                    <img src={blackStarHollow} alt="grey star" />
                </button>
            )}
        </div>
    )
}
export default MarkFavourite;