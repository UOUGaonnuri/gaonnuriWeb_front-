import React, { useState,useEffect } from "react";

import "../../../css/StudyDetailSidebar.scss"


export function StudyDetailSidebar(props){
    
    
    return(
        <div className="ComStudyDetailSidebar">
        <div className="study_name">{props.study_name}</div>
        <div className="study_pages">
            {props.study_pages.map((page,i)=>{
                return(<><li className="page_title" onClick={()=>{props.setStudyPageCode(i)}}>{page.title}</li> </>)
            })}
        </div>
        </div>
    );
}