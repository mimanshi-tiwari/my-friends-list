import { useState } from "react";
import search from "../Assets/Icons/search.svg";
interface SearchProps {
    searchFriends: any
    addFriend: any;
}
const InputElement = (props: SearchProps) => {
    const { searchFriends, addFriend } = props;
    const [searchValue, setSearchValue] = useState("");
    const [newFriendValue, setNewFriendValue] = useState("");
    const handleSearch = (searchString: string) => {
        const value = searchString.trim();
        setSearchValue(searchString)
        searchFriends(value);
    }

    const handleEnter = (e: any) => {
        if (e.key === "Enter") {
            addFriend(e.target.value.trim());
            setNewFriendValue("")
        }
    }
    return (
        <div className="searchContainer divider">
            <label className="screenReaderText">Add new Friend</label>
            <input id="add-friend" type="text"
                title="Search" placeholder="Enter your Friend's name"
                value={newFriendValue}
                onChange={(e) => setNewFriendValue(e.target.value)} 
                onKeyUp={(e) => handleEnter(e)} />
            <label className="screenReaderText">Search Friends</label>
            <input id="search-bar" type="text"
                title="Search" placeholder="Search your friends"
                value={searchValue}
                onChange={(e) => handleSearch(e.target.value)}
            />
            <img src={search} alt="search icon" />
        </div>
    )
}

export default InputElement;