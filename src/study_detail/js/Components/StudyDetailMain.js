import React, { useState } from "react";
import { StudyDetailTitle } from "./StudyDetailTitle";
import { StudyDetailView } from "./View/StudyDetailView";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import gfm from 'remark-gfm'

export function StudyDetailMain(){
    return(
        <div>
        <StudyDetailTitle/>
        <StudyDetailView/>
        </div>
    );
}
