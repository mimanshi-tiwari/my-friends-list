
interface PaginationProps {
    totalFriends: number;
    friendsPerList: number;
    setActiveListNumber: any;
}

const Pagination = (props: PaginationProps) => {
    const { totalFriends, friendsPerList, setActiveListNumber } = props;
    const listNumbers = [];
    for (let i = 1; i <= Math.ceil(totalFriends / friendsPerList); i++) {
        listNumbers.push(i)
    }

    const paginate = (listNumber: number) => {
        setActiveListNumber(listNumber)
    }
    return (
        <nav>
            <ul className="paginationContainer">
                {
                    listNumbers.length && (
                        listNumbers.map((number: number) => {
                            return (
                                <li key={number} className="navigationList">
                                    <button onClick={() => paginate(number)}>
                                        {number}
                                    </button>
                                </li>
                            )
                        })
                    )
                }
            </ul>
        </nav>
    )
}
export default Pagination;