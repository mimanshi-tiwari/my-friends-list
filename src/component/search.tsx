import search from "../Assets/Icons/search.svg";
interface SearchProps {

}
const Search = (props: SearchProps) => {
return (
    <div className="searchContainer">
        <label className="screenReaderText">Search Friends</label>
        <input id="search-bar" type="text" title="Search"  placeholder="Enter your Friend's name." />
        <img src={search} alt="search icon"/>
    </div>
)
}

export default Search;