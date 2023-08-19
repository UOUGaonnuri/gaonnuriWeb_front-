import React, { useState } from "react";
import '../../../css/StudyDetailMarkdownFixer.scss';

import MDEditor from "@uiw/react-md-editor";
import { propTypes } from "react-bootstrap/esm/Image";
//import "./StudyDetailContnts.scss";


export function StudyDetailMarkdownFixer (props){
    
    return(<div className="ComStudyDetailMarkdownFixer">
        <div className="CheckBtn" onClick={()=>{props.setMode(0)}}>확인</div>
        <div data-color-mode="light">
            <MDEditor height={400} value={props.content} onChange={props.setContent}/>
        </div>
    </div>)
}


