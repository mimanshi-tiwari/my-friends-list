import React from "react";
import MarkFavourite from "./mark-favourite";
import RemoveFriend from "./remove-friend";
import "../Assets/Styles/style.css";
import Search from "./search";
interface FriendsListProps {

}

const FriendsList = (props: FriendsListProps) => {
    const friendsList = [
        {
            name: "Rahul Gupta",
            isFavourite: false,
            id: 'asd'
        },
        {
            name: "Shivangi Sharma",
            isFavourite: false,
            id: 'asdadas'
        },
        {
            name: "Akash Singh",
            isFavourite: false,
            id: 'asdsd'
        },
        {
            name: "Friend Name",
            isFavourite: false,
            id: 'asdaweq'
        }
    ]
    return (
        <div className="container">
            <div>Friends List</div>
            <Search/>
            <ul>
                {friendsList.map((friend: any) => {
                    return (
                   <div>     
                    <li key={friend.id}>
                        {friend.name}
                        {"is your friend"}
                        <MarkFavourite />
                        <RemoveFriend />
                    </li>
                    </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default FriendsList;