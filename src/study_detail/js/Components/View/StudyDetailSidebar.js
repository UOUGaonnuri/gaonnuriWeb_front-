import React, { useState,useEffect } from "react";
// import {Add_input} from "./StudyDetailAdd_input";

import "../../../css/StudyDetailSidebar.scss";


export function StudyDetailSidebar(props){
    
    const [add,setAdd] = useState(true);
    const [new_title,setNewTitle] = useState("없어요, 아니 없어요");
    

    function addNewPage(){
        console.log(props.study_pages)
        console.log(typeof(props.study_pages))
        props.newStudyPages.push(new_title);
        console.log("add new page");
    }
    return(
        <div className="ComStudyDetailSidebar">
        <div className="sidebar_item">
            <div className="study_name">{props.study_name}</div>
            
        </div>
        <div className="study_pages">
            {props.study_pages.map((page,i)=>{
                return(<div className="item"><li className="page_title" onClick={()=>{props.setStudyPageCode(i)}}>{page.title}</li>
                <div className="page_logo">
                <div className="del">❌</div>
                <div className="up-down">
                <div className="up">🔼</div>
                <div className="down">🔽</div></div></div></div>)
            })}
            {add ? 
            <div className="add_input">
                <input onChange={(e)=>{setNewTitle(e.target.value)}}></input>
                <div className="check" onClick={()=>addNewPage()}>✔️</div>
            </div>
            :<div className="add" onClick={()=>{setAdd(true)}}>➕</div>}
            
               
        </div>

        <div className="sidebar_editor">

        </div>
        </div>
    );
}