import { atom } from "recoil";

const colorTheme = atom({
    key: "colorMode",
    default: false,
});

export default colorTheme;