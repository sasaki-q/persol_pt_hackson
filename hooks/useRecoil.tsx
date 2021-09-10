import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";

interface UserState {
    id: number;
    username: string;
}

const userState = atom({
    key: "UserState",
    default: null,
});

export function useRecoil({ userData }): UserState {
    console.log("hooks use recoil", userState);
    const [currentUser, setCurrentUser] = useRecoilState<UserState>(userState);

    useEffect(() => {
        if (userData === null) {
            return ;
        }
    
        if (userData) {
            const user = {
                id: userData.id,
                username: userData.userName,
            };
            setCurrentUser(user);
        }
    }, [userData]);

    return currentUser;
}