import React, {useState} from "react";
import styled,{css}  from "styled-components";

// 제목을 화면에 표시
// 목차한테 props를 받아 제목으로 나타내려 함

const Title = styled.span`
    width: 157px;
    height: 71px;

    color: #000;
    font-family: NanumSquareRound;
    font-size: 70px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export function StudyTitle(props) {

    return(
        <Title>{props.title}</Title>
    )
}