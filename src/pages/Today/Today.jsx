import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import { isRightSubSidebarState } from '../../store/sidebarStore';
import { useRecoilState } from 'recoil';
import MainContainer from '../../components/MainContainer/MainContainer';
import Header from '../../components/MainContainer/Header/Header';
import AddNewTaskButton from '../../components/Buttons/AddNewTaskButton/AddNewTaskButton';
import TaskList from '../../components/Lists/TaskList/TaskList';
import RightSubSidebar from '../../components/RightSubSidebar/RightSubSidebar';

function Today(props) {
    const [ target, setTarget ] = useState(null);

    return (
        <>
            <MainContainer>
                <Header title={"today"} count={5} />
                <AddNewTaskButton target={target} setTarget={setTarget}/>
                <TaskList target={target} setTarget={setTarget}/>
            </MainContainer>
            <RightSubSidebar>
                
            </RightSubSidebar>
        </>
    );
}

export default Today;