import React, { useState } from "react";
import styled from "styled-components";
import { StudyTitle } from "./StudyTitle";
import { StudyContents } from "./StudyContents";

// 목차를 화면에 표시

const Sort = styled.div`
  display: flex;
  justify-content: center;
`;

const List = styled.div`
  position: relative;
  margin-right: 30px;
  top: 296px;
  color: ${({ isSelected }) => (isSelected ? '#000' : '#A2A2A2')};
  
  font-family: "NSRR";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;  // 커서를 포인터로 변경하여 클릭 가능한 상태로 만듦
  z-index:1 // StudyContents의 flex-direction: column; 속성때문에 클릭되지 않는걸 해결
`;

export function StudyList() {
  const [selectedContent, setSelectedContent] = useState("모두보기");

  const handleClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div>
      <StudyTitle title={selectedContent}/>
      <Sort>
        <List isSelected={selectedContent === "모두보기"} onClick={() => handleClick("모두보기")}>모두보기</List>
        <List isSelected={selectedContent === "웹/앱"} onClick={() => handleClick("웹/앱")}>웹/앱</List>
        <List isSelected={selectedContent === "메타버스"} onClick={() => handleClick("메타버스")}>메타버스</List>
        <List isSelected={selectedContent === "AI"} onClick={() => handleClick("AI")}>AI</List>
        <List isSelected={selectedContent === "CS"} onClick={() => handleClick("CS")}>CS</List>
        <List isSelected={selectedContent === "학술"} onClick={() => handleClick("학술")}>학술</List>
      </Sort>
    </div>
  );
}
