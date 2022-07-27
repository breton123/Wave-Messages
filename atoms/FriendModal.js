import { atom } from "recoil";

const addFriend = atom({
    key: "addFriend",
    default: false,
});

export default addFriend;