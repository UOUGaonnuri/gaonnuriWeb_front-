import React, { useState,useEffect } from "react";
import '../../../css/StudyDetailContents.scss';

import MDEditor from "@uiw/react-md-editor";
import { propTypes } from "react-bootstrap/esm/Image";

import { StudyDetailMarkdownFixer } from "./StudyDetailMarkdownFixer";
import { StudyDetailMarkdownViewer } from "./StudyDetailMarkdownViewer";
//import "./StudyDetailContnts.scss";

//스크롤 기능 추가하기
export function StudyDetailContents(props){

    const [content,setContent] = useState("** HelloWolrd! **");
    const [mode,setMode] = useState(0);


    return(<div className="ComStudyDetailContnts">
        <div className="top">
            
            <div className="title">{props.study_pages[props.study_page_code].title}</div>
        </div>
        <div className="content">
            {mode==0 ? <StudyDetailMarkdownViewer content={content} setContent={setContent} mode={mode} setMode={setMode}/> :<StudyDetailMarkdownFixer content={content} setContent={setContent} mode={mode} setMode={setMode}/>}
                
                
        </div>
    </div>);
}