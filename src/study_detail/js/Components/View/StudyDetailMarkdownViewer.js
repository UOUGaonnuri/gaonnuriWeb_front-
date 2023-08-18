import React, { useState } from "react";
import '../../../css/StudyDetailMarkdownViewer.scss';

import MDEditor from "@uiw/react-md-editor";
import { propTypes } from "react-bootstrap/esm/Image";
//import "./StudyDetailContnts.scss";


export function StudyDetailMarkdownViewer (props){

    return(<div className="ComStudyDetailMarkdownFixer">
        <div className="fixBtn" onClick={()=>{props.setMode(1)}}>수정</div>
        <MDEditor.Markdown source={props.content} style={{ whiteSpace: 'pre-wrap' }} />
    </div>)
}
