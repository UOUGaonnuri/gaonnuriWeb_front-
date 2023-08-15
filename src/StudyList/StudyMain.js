import React, {useState} from "react";

import { StudyList } from "./StudyList";
import { StudyContents } from "./StudyContents"

// js파일을 합침

export function StudyMain(props) {
    
    return(
        <div>
        <StudyList></StudyList>
        <StudyContents></StudyContents>
        </div>
    );
}