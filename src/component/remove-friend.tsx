import trashCan from "../Assets/Icons/trashCan.png";

interface RemoveFriendProps {
    handleDelete: any;
    friendInfo: any
}

const RemoveFriend = (props: RemoveFriendProps) => {
    const { handleDelete, friendInfo } = props;
    const handleDeleteClick = (friendId: string) => {
        handleDelete(friendId)
    }
    return (
        <div className="iconContainer">
            <button onClick={() => handleDeleteClick(friendInfo.uuid)}>
                <img src={trashCan} alt="trash can" />
            </button>
        </div>
    )
}
export default RemoveFriend;