import React from "react";
import styled,{css}  from "styled-components";

// 제목을 화면에 표시
// StudyList에서 props를 받아 제목으로 나타내려 함

const Sort = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const Title = styled.span`
    position: absolute;
    top: 154px;

    color: #000;
    font-family: NanumSquareRound;
    font-size: 70px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export function StudyTitle(props) {

    return(
        <Sort>
            <Title>{props.title}</Title>
        </Sort>
    );
}