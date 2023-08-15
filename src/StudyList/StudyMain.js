import React, {useState} from "react";

import { StudyTitle } from "./StudyTitle";
import { StudyContents } from "./StudyContents";

// js파일을 합침

export function StudyMain(props) {
    
    return(
        <div>
        <StudyTitle></StudyTitle>
        <StudyContents></StudyContents>
        </div>
    )
}