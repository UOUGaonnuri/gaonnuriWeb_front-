import React, { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import gfm from 'remark-gfm'

export function StudyDetailContents(props){

    return(<div>
        {<ReactMarkdown
            remarkPlugins={gfm}>
                {props.study_pages[props.study_page_code].contents}
        </ReactMarkdown>}
    </div>);
}