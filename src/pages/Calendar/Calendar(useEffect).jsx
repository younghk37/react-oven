import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";

function Calendar(props) {
    // const [count, setCount ] = useState(0);
    // const [saveCount, setSaveCount ] = useState(0);

    //useEffect(마운트때 실행될 함수, [상태변수])
    // [] 비어 있는 배열일 때는 페이지가 처음 랜더링될 때 한번만 실행됨.
    useEffect(() => {
        console.log("캘린더 컴포넌트가 마운트됨.");
        return () => {
            console.log("캘린더 컴포넌트가 언마운트됨");
        };
    }, []);

    // const handlePlusClick = () => {
    //     setCount(count + 1);
    // };

    // const handleMinusClick = () => {
    //     setCount(count - 1);
    // };

    // const handleSaveClick = () => {
    //     setSaveCount(count);
    // };

    return (
        <div css={S.SLayout}>
            {/* <div>
                <h1>{count}</h1>
                <h1>{saveCount}</h1>
                <button onClick={handlePlusClick}>+1</button>
                <button onClick={handleMinusClick}>-1</button>
                <button onClick={handleSaveClick}>save</button>
            </div> */}
        </div>
    );
}

export default Calendar;