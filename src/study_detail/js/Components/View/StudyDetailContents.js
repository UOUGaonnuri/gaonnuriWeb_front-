import React, { useState } from "react";
import '../../../css/StudyDetailContents.scss';

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import gfm from 'remark-gfm'
//import "./StudyDetailContnts.scss";

//스크롤 기능 추가하기
export function StudyDetailContents(props){

    return(<div className="StudyDetailContnts">
        <div className="title">{props.study_pages[props.study_page_code].title}</div>
        <div className="content">
            {<ReactMarkdown
                remarkPlugins={gfm}>
                    {props.study_pages[props.study_page_code].contents}
            </ReactMarkdown>}
        </div>
    </div>);
}