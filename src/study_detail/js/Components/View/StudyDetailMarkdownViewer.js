import React, { useState } from "react";
import '../../../css/StudyDetailMarkdownViewer.scss';

import MDEditor from "@uiw/react-md-editor";
import { propTypes } from "react-bootstrap/esm/Image";
//import "./StudyDetailContnts.scss";


export function StudyDetailMarkdownViewer (props){

    return(
    <div className="ComStudyDetailMarkdownFixer">
        <div className="con_bar">
            <div className="fixBtn" onClick={()=>{props.setMode(1)}}>수정</div>
            <div className="delBtn" onClick={()=>{props.study_pages.splice(props.study_page_code,1)}}>삭제</div>
        </div>
        <div className="mdviewer" data-color-mode="light"><MDEditor.Markdown source={props.content} style={{ whiteSpace: 'pre-wrap' }} /></div>
    </div>)
}
