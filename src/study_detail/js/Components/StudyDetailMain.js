import React, { useState } from "react";
import { StudyDetailTitle } from "./StudyDetailTitle";
import { StudyDetailView } from "./View/StudyDetailView";


export function StudyDetailMain(){
    return(
        <div>
        <StudyDetailTitle/>
        <StudyDetailView/>
        </div>
    );
}
