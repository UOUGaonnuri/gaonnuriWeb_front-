import React, {useState} from "react";
import styled from "styled-components";
import Reactimage from './image/reactLogo.jpeg'; 
import Algorithmimage from './image/algorithm.png'; 
import Noimage from './image/noImage.png'; 

const SortContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  margin: 0 40px; 
`;

const ContentMarginTop = styled.div`
  margin-top: 300px;
`
const ContentMarginBottom = styled.div`
  margin-bottom: 100px;
`
const ContentImage = styled.img`
  margin-top: 50px;
  
  width: 362px;
  height: 195px;
  border-radius: 20px;
  background: #d9d9d9;
`;

const ContentTitle = styled.div`
  margin-top: 15px;
  margin-right: 250px;

  font-family: "NSRR";
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  
  // 글자가 늘어났을 때 오른쪽으로만 이동
  width: 100px; //고정된 너비
  white-space: nowrap; // 줄 바꿈 금지
`;

const ContentPeriod = styled.div`
  margin-top: 50px;
  margin-right: 250px;

  font-family: "NSRR";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #676767;

  // 글자가 늘어났을 때 오른쪽으로만 이동
  width: 100px; //고정된 너비
  white-space: nowrap; // 줄 바꿈 금지
`;

const ContentActive = styled.div`
  margin-top: -25px;
  margin-right: -285px;

  color: #000;
  font-family: "NSRR";
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  
  // 글자가 늘어났을 때 오른쪽으로만 이동
  width: 100px; //고정된 너비
  white-space: nowrap; // 줄 바꿈 금지
`;

const ContentActiveImage = styled.div`
  margin-top: -25px;
  margin-right: -150px;

  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #46da00;
`;

function Content({ title, period, activeText, image }) {

    return (
      <ContentWrapper>
        <ContentImage src={image} alt="스터디 사진"/>
        <ContentTitle>{title}</ContentTitle>
        <ContentPeriod>{period}</ContentPeriod>
        <ContentActive>{activeText}</ContentActive>
        <ContentActiveImage></ContentActiveImage>
      </ContentWrapper>
    );
  }
  
  export function ALLContents() {

    return (
      <div>
        <ContentMarginTop />
  
        <SortContent>
          <Content
            image={Algorithmimage}
            title="알고리즘 스터디"
            period="2023 여름방학"
            activeText="활동중"
          />
          <Content
            image={Noimage}
            title="백준풀이 스터디"
            period="2023 2학기"
            activeText="모집중"
          />
        </SortContent>
  
        <SortContent>
          <Content
            image={Noimage}
            title="게임 스터디"
            period="2023 1학기"
            activeText="활동완료"
          />
          <Content
            image={Reactimage}
            title="웹 기초 스터디"
            period="2023 1학기"
            activeText="활동완료"
          />
        </SortContent>
        
        <ContentMarginBottom />
      </div>
    );
  }
  
  export function StudyContents() {
    return (
      <div>
        <ALLContents />
      </div>
    );
  }