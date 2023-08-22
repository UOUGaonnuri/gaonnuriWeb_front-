import React, { useState,useEffect } from "react";
import '../../../css/StudyDetailContents.scss';

import MDEditor from "@uiw/react-md-editor";
import { propTypes } from "react-bootstrap/esm/Image";

import { StudyDetailMarkdownFixer } from "./StudyDetailMarkdownFixer";
import { StudyDetailMarkdownViewer } from "./StudyDetailMarkdownViewer";
//import "./StudyDetailContnts.scss";

//스크롤 기능 추가하기
export function StudyDetailContents(props){

    const [mode,setMode] = useState(0);
    const [content,setContent] = useState("# 임시");


    return(<div className="ComStudyDetailContnts">
        <div className="top">
            <div className="title">{props.study_pages[props.study_page_code].title}</div>
        </div>
        <div className="content">
            {mode==0 ?
            <div className="viewer"><StudyDetailMarkdownViewer setContent={setContent} content={content} study_page_code = {props.study_page_code} study_pages={props.study_pages} setStudyPages={props.setStudyPages} mode={mode} setMode={setMode}/></div>
            :<div className="fixer"><StudyDetailMarkdownFixer setContent={setContent} mode={mode} setMode={setMode} study_page_code = {props.study_page_code} study_pages={props.study_pages} setStudyPages={props.setStudyPages}/></div>}
                  
        </div>
    </div>);
}