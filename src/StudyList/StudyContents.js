import React from "react";
import styled,{css}  from "styled-components";


const Sort = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContentFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ContentImage = styled.div`
    position: relative;
    width: 362px;
    height: 195px;
    top : 370px;
    left : -230px;
    border-radius: 20px;
    background: #D9D9D9;
`
const ContentTitle = styled.div`
    position: relative;
    top : 385px;
    left : -355px;
    color: #000;
    font-family: NanumGothic;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    
    // 글자가 늘어났을 때 오른쪽으로만 이동
    width: 100px; //고정된 너비
    white-space: nowrap; // 줄 바꿈 금지
`
const ContentNum = styled.div`
    position: relative;
    top : 405px;
    left : -355px;
    color: #000;
    font-family: NanumGothic;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    
    // 글자가 늘어났을 때 오른쪽으로만 이동
    width: 100px;
    white-space: nowrap; 
`
const ContentActive = styled.div`
    position: relative;
    top : 375px;
    left : -95px;
    color: #000;
    font-family: NanumGothic;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const ContentActiveImage = styled.div`
    position: relative;
    top : 348px;
    left : -160px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #46DA00;
`
const ContentTopDiv = styled.div`
    margin-top:40px;
`
function Content(){
    return(
        <Sort>
            <ContentFlex>
            <ContentImage></ContentImage>
            <ContentTitle>{"알고리즘 스터디"}</ContentTitle>
            <ContentNum>{15}개의 스터디</ContentNum>
            <ContentActive>활동중</ContentActive>
            <ContentActiveImage></ContentActiveImage>
            </ContentFlex>
            <ContentTopDiv></ContentTopDiv>
        </Sort>
    );
}

export function ALLContents() {

    return(
        <div>
            <Content></Content>
            <Content></Content>
        </div>
    );
}

export function WebAPPContents() {

    return(
        <div>
            <Content></Content>
            <Content></Content>
        </div>
    );
}

export function MetaContents() {

    return(
        <div>
            <Content></Content>
            <Content></Content>
        </div>
    );
}

export function AIContents() {

    return(
        <div>
            <Content></Content>
            <Content></Content>
        </div>
    );
}

export function CSContents() {

    return(
        <div>
            <Content></Content>
            <Content></Content>
        </div>
    );
}

export function StContents() {

    return(
        <div>
            <Content></Content>
            <Content></Content>
        </div>
    );
}

export function StudyContents() {

    // 라우팅으로 적용하는거 생각해보기

    return(
        <div>
            <ALLContents />
        </div>
    );
  }