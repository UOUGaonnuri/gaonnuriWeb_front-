import React, { useState } from "react";
import { StudyDetailView } from "../js/Components/View/StudyDetailView";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import {Navbar} from "../js/Ui/Navbar";
import gfm from 'remark-gfm';

export function StudyDetailMain(){
    return(
        <div className="StudyDetailMain">
            <div className="Navbar"><Navbar/></div>
            <div className="StudyDetailView"><StudyDetailView/></div>
        </div>
    );
}
