import React, { useState,useEffect } from "react";
import '../../../css/StudyDetailContents.scss';

import MDEditor from "@uiw/react-md-editor";
import { propTypes } from "react-bootstrap/esm/Image";

import { StudyDetailMarkdownFixer } from "./StudyDetailMarkdownFixer";
import { StudyDetailMarkdownViewer } from "./StudyDetailMarkdownViewer";
//import "./StudyDetailContnts.scss";

//스크롤 기능 추가하기
export function StudyDetailContents(props){

    const [fix,setFix] = useState(false)


    return(<div className="ComStudyDetailContnts">
        <div className="top">
            
            <div className="title">{props.study_pages[props.study_page_code].title}</div>
            <div className="fixBtn" onClick={()=>{setFix(true)}}>수정하기</div>
        </div>
        <div className="content">
                {fix ? <StudyDetailMarkdownFixer/> : <StudyDetailMarkdownViewer/>}
        </div>
    </div>);
}