import React, { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import { StudyDetailSidebar } from "./StudyDetailSidebar";
import { StudyDetailContents } from "./StudyDetailContents";

import '../../../css/StudyDetailView.scss';

export function StudyDetailView(){
    const [study_pages,setStudyPages] = useState([{title:"스터디페이지1",contents:`# 마크다운1
# 마크다운 1
# 마크다운 1
# 마크다운 1
# 마크다운 1
# 마크다운 1
# 마크다운 1
# 마크다운 1
# 마크다운 1
# 마크다운 1
# 마크다운 1
# 마크다운 1
# 마크다운 1
# 마크다운 1
# 마크다운 1
# 마크다운 1

`},{title:"스터디페이지2",contents:`# 마크다운2`},{title:"스터디페이지3",contents:'# 마크다운3'}]);
    const [study_page_code,setStudyPageCode] = useState(0);
    const [study_name,setStudyName] = useState("스터디명");
    
    return(
    <div className="ComponentStudyDetailView">
        <div className="StudyDetailSidebar">
            <StudyDetailSidebar study_pages={study_pages} setStudyPageCode={setStudyPageCode} study_name={study_name} ></StudyDetailSidebar>
        </div>
        <div className="StudyDetailContents">
            <StudyDetailContents study_pages={study_pages}  study_page_code={study_page_code}></StudyDetailContents>
        </div>
    </div>);
}