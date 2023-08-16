import React, { useState } from "react";


export function StudyDetailContents(props){
    return(<div>
        {props.study_pages[props.study_page_code].contents}
    </div>);
}