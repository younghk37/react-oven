/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from 'react';
import * as S from "./Style";
import MainSidebar from "../MainSidebar/MainSidebar";

function MainLayout({ children }) {
    return (
        <div css={S.SLayout}>
            <MainSidebar />
            {children}
        </div>
    );
}

export default MainLayout;