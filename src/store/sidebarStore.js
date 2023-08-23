const { atom } = require("recoil");

export const isSidebarShowState = atom({
    key: "isSidebarShow",
    default: false
});

export const isRightSubSidebarState = atom({
    key: "isRightSubSidebar",
    default: false
});