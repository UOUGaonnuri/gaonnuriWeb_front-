import React, { useState } from "react";
import styled from "styled-components";

// 목차를 화면에 표시

const Contents = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  margin-right: 30px;
  margin-top: 296px;
  color: ${({ isSelected }) => (isSelected ? '#A2A2A2' : '#000')};
  
  font-family: NanumSquareRound;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer; /* 커서를 포인터로 변경하여 클릭 가능한 상태로 만듦 */
`;

export function StudyContents() {
  const [selectedContent, setSelectedContent] = useState(null);

  const handleClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div>
      <Contents>
        <Content isSelected={selectedContent === "모두보기"} onClick={() => handleClick("모두보기")}>모두보기</Content>
        <Content isSelected={selectedContent === "웹/앱"} onClick={() => handleClick("웹/앱")}>웹/앱</Content>
        <Content isSelected={selectedContent === "메타버스"} onClick={() => handleClick("메타버스")}>메타버스</Content>
        <Content isSelected={selectedContent === "AI"} onClick={() => handleClick("AI")}>AI</Content>
        <Content isSelected={selectedContent === "CS"} onClick={() => handleClick("CS")}>CS</Content>
        <Content isSelected={selectedContent === "학술"} onClick={() => handleClick("학술")}>학술</Content>
      </Contents>
    </div>
  );
}
