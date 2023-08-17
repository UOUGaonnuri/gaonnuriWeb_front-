import React, { useState,useEffect } from "react";

import "../../../css/StudyDetailSidebar.scss"


export function StudyDetailSidebar(props){
    
    
    return(
        <div className="StudyDetailSidebar">
        <div className="study_name">{props.study_name}</div>
        <div className="stud_pages">
            {props.study_pages.map((page,i)=>{
                return(<><div className="page_title" onClick={()=>{props.setStudyPageCode(i)}}>{page.title}</div> </>)
            })}
        </div>
        </div>
    );
}