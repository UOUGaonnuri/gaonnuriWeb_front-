import React, { useState } from "react";
import '../../../css/StudyDetailMarkdownFixer.scss';

import MDEditor from "@uiw/react-md-editor";
import { propTypes } from "react-bootstrap/esm/Image";
//import "./StudyDetailContnts.scss";

export function StudyDetailMarkdownFixer (props){
    
    const [save,setSave] = useState(props.content)
        
    function saveContent(){
        props.setStudyPages(props.study_pages.splice(props.study_page_code,))
        props.setMode(0)
    }


    return(<div className="ComStudyDetailMarkdownFixer">
        <div className="CheckBtn" onClick={()=>{console.log(typeof(save),save)}}>확인</div>
        <div data-color-mode="light">
            <MDEditor height={400} value={save} onChange={setSave}/>
        </div>
    </div>)
}