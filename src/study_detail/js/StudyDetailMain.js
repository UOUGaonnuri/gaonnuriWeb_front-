import React, { useState } from "react";
import { StudyDetailView } from "../js/Components/View/StudyDetailView";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import {Topbar} from "./Ui/Topbar";
import gfm from 'remark-gfm';

export function StudyDetailMain(){
    return(
        <div className="ComStudyDetailMain">
            <div className="Topbar"><Topbar/></div>
            <div className="StudyDetailView"><StudyDetailView/></div>
        </div>
    );
}
