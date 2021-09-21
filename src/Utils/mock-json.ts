export interface MockFriendsList {
    name: string;
    isFavourite: boolean;
    uuid: string;
}

const mockList: Array<MockFriendsList> = [
    {
        name: "Rahul Gupta",
        isFavourite: false,
        uuid: "",
    },
    {
        name: "Shivangi Sharma",
        isFavourite: false,
        uuid: "",
    },
    {
        name: "Akash Singh",
        isFavourite: false,
        uuid: "",
    },
    {
        name: "Shivangi Dubey",
        isFavourite: false,
        uuid: "",
    },
    {
        name: "Rahul Mishra",
        isFavourite: false,
        uuid: "",
    },
    {
        name: "Shivi Singh",
        isFavourite: false,
        uuid: "",
    },
    {
        name: "Alok Agarwal",
        isFavourite: false,
        uuid: "",
    },
];

export const fetchFriendsList = (): Promise<Array<MockFriendsList>> => {
    return new Promise((resolve, reject) => {
        try {
            let response: Array<MockFriendsList> = [];
            response = mockList.map((person: any) => {
                return {
                    name: person.name,
                    isFavourite: person.isFavourite,
                    uuid: uuidV4(),
                };
            });
            //! replace resolve(response) with reject() to check the api failure flow.
            //! resolve empty list to check list with no friends.
            resolve(response);
        } catch(e) {
            console.log('Error fetching Feiends List', e);
            reject(e);
        }
    });
};

/**
 * @returns A universal unique ID.
 */
export function uuidV4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        let r = (Math.random() * 16) | 0,
            v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
