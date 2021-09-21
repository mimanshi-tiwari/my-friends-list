import React, { useEffect, useState } from "react";
import MarkFavourite from "./mark-favourite";
import RemoveFriend from "./remove-friend";
import "../Assets/Styles/style.css";
import Search from "./search";
import { fetchFriendsList, uuidV4 } from "../Utils/mock-json";
import { WarningModalProps } from "../Utils/interface";
import ConfirmationPopUp from "./confirmation-popup";
interface FriendsListProps {

}

const FriendsList = (props: FriendsListProps) => {
    const [friendsList, setFriendsList] = useState([]);
    const [fetchFailed, setFetchFailed] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [openWarning, setOpenWarning] = useState<WarningModalProps | null>(null);

    useEffect(() => {
        fetchFriendsList().then(
            (mockedList: any) => {
                setFriendsList(mockedList)
            }
        ).catch(error => {
            setFetchFailed(true);
        })
    }, []);

    const toggleFavourite = (friendId: string) => {
        const updatedList: any = friendsList.map((friend: any) => ({ ...friend }));
        updatedList.forEach((friend: any) => {
            if (friend.uuid === friendId) {
                friend.isFavourite = !friend.isFavourite;
            }
        });
        setFriendsList(updatedList);
    }

    const searchFriends = (searchTerm: string) => {
        setSearchTerm(searchTerm);
    }

    const handleDelete = (friendId: string) => {
        setOpenWarning({
            isOpen: true,
            handleClose: (isConfirmed: boolean) => handleConfirmDelete(isConfirmed, friendId),
            header: "Remove Friend",
            primaryBtnName: "Yes",
            body: `Are you sure you want to remove this friend ?`,
        });
    }

    const handleConfirmDelete = (isConfirmed: boolean, friendId: string) => {
        if (isConfirmed) {
            // eslint-disable-next-line
            let updatedList: any = friendsList.filter((friend: any) => {
                if (friend.uuid !== friendId) {
                    return { ...friend }
                }
            });
            setFriendsList(updatedList)
        }
        setOpenWarning(null);
    }

    const addFriend = (friendName: string) => {
        let updatedList: any = friendsList.map((friend: any) => ({ ...friend }));
        const newFriend = {
            name: friendName,
            isFavourite: false,
            uuid: uuidV4()
        }
        setSearchTerm("");
        updatedList.push(newFriend);
        setFriendsList(updatedList)
    }

    if (fetchFailed) {
        return (
            <div className="margin20px">Sorry!, unable to fetch data.</div>
        )
    }

    return (
        <div className="container divider">
            <div className="divider">Friends List</div>
            <Search searchFriends={searchFriends} addFriend={addFriend}/>
            <ul>
             {/* eslint-disable-next-line */}
                {friendsList.length ? (friendsList.filter((friend: any) => {
                    if (searchTerm === "") {
                        return friend;
                    } else if (friend.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return friend;
                    }
                }).map((friend: any) => {
                    return (
                        <div key={friend.id} className="divider listItem">
                            <li >
                                <div className="friendDetails">
                                    <span>{friend.name}</span>
                                    <span> {"is your friend"}</span>
                                </div>
                                <MarkFavourite friendInfo={friend} toggleFavourite={toggleFavourite} />
                                <RemoveFriend friendInfo={friend} handleDelete={handleDelete} />
                            </li>
                        </div>
                    )
                })) : (
                    <div>
                        No friends added to the list.
                    </div>
                )}
            </ul>
            {openWarning && (
                <ConfirmationPopUp
                    isOpen={openWarning.isOpen}
                    handleClose={openWarning.handleClose}
                    primaryBtnName={openWarning.primaryBtnName}
                    header={openWarning.header}
                    body={openWarning.body}
                />
            )}
        </div>
    )
}

export default FriendsList;