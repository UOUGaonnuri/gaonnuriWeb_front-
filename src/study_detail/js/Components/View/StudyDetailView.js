import React, { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import axios from "axios";

import { StudyDetailSidebar } from "./StudyDetailSidebar";
import { StudyDetailContents } from "./StudyDetailContents";

import '../../../css/StudyDetailView.scss';

export function StudyDetailView(){

    const [study_pages,setStudyPages] = useState([{title:"스터디페이지1",contents:`# 마크다운 1

`},{title:"스터디페이지2",contents:`# 마크다운2`},{title:"스터디페이지3",contents:'# 마크다운3'}]);
    const [study_page_code,setStudyPageCode] = useState(0);
    const [study_name,setStudyName] = useState("스터디명");

    return(
    <div className="ComponentStudyDetailView">
        <div className="StudyDetailSidebar">
            <StudyDetailSidebar study_pages={study_pages} setStudyPageCode={setStudyPageCode} study_name={study_name} ></StudyDetailSidebar>
        </div>
        <div className="StudyDetailContents">
            <StudyDetailContents study_pages={study_pages}  study_page_code={study_page_code}></StudyDetailContents>
        </div>
    </div>);
}

/**
 * json파일을 설정할거다.
 * 1. 백엔드랑 json 파일 주고 받을거다..
 * 2. json 파일에는 스터디명(string), 스터디페이지들(array) ->({페이지제목(string),페이지내용(string)})
 * 3. study 페이지에서 어떤 스터디를 클릭한다. -> 해당 스터디에 대한 json 파일이 요청된다.
 * 4. 요청된 json 파일을 이용해서 화면에 데이터를 뿌린다.
 * 5. 수정후 저장을 하면, json파일의 내용을 변경해야한다.
 * 
 * react에서는 AXIOS로 통신하는게 맞다.
 * 데이터를 통신하면, promise 같은 걸 써서
 * 데이터가 올 때까지 기다려주는? 그런 구문을 써야하는데
 * AXIOS는 그런 것들을 간편하게 해주는 듯?
 * AXIOS 라이브러리 설치하자.
 */