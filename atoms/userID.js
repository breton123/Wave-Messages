import { atom } from "recoil";

const globalUserID = atom({
    key: "globalUserID",
    default: "error",
});

export default globalUserID;