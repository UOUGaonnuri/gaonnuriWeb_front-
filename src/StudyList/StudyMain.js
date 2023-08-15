import React, {useState} from "react";

import { StudyTitle } from "./StudyTitle";
import { StudyContents } from "./StudyContents";


export function StudyMain(props) {
    
    return(
        <div>
        <StudyTitle></StudyTitle>
        <StudyContents></StudyContents>
        </div>
    )
}