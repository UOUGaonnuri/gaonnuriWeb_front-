import React, { useState } from "react";
import { StudyDetailSidebar } from "./StudyDetailSidebar";
import { StudyDetailContents } from "./StudyDetailContents";



export function StudyDetailView(){
    const [study_pages,setStudyPages] = useState([{title:"스터디페이지1",contents:"마크다운1"},{title:"스터디페이지2",contents:"마크다운2"},{title:"스터디페이지3",contents:"마크다운3"}]);
    const [study_page_code,setStudyPageCode] = useState(0);
    const [study_name,setStudyName] = useState("스터디명");
    
    return(<div>
    <StudyDetailSidebar study_pages={study_pages} setStudyPageCode={setStudyPageCode} study_name={study_name} ></StudyDetailSidebar>
    <StudyDetailContents study_pages={study_pages}  study_page_code={study_page_code}></StudyDetailContents>
    </div>);
}