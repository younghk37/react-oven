const { atom } = require("recoil");

export const isSidebarShowState = atom({
    key: "isSidebarShow",
    default: false
});