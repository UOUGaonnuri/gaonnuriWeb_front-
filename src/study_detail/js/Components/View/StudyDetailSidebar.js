import React, { useState,useEffect } from "react";
// import {Add_input} from "./StudyDetailAdd_input";

import "../../../css/StudyDetailSidebar.scss";


export function StudyDetailSidebar(props){
    
    const [add,setAdd] = useState(true);
    const [new_title,setNewTitle] = useState("");
    
    function saveNewPage() {
        if (new_title == ""){
            alert("페이지 제목을 입력해주세요");
        }
        else{
        props.setStudyPages(props.study_pages.concat({title:new_title,contents:""}));
        setNewTitle("");
        setAdd(false);}
    }


    return(
        <div className="ComStudyDetailSidebar">
        <div className="sidebar_item">
            <div className="study_name">{props.study_name}</div>
            
        </div>
        <div className="study_pages" onClick={()=>{console.log(new_title)}}>
            {props.study_pages.map((page,i)=>{
                return(<div className="item"><li className="page_title" onClick={()=>{props.setStudyPageCode(i)}}>{page.title}</li>
                <div className="page_logo">
                <div className="up-down">
                <div className="up">🔼</div>    
                <div className="down">🔽</div></div></div></div>)
            })}
            {add ? 
            <div className="add_input">
                <input onInput={(e)=>{setNewTitle(e.target.value)}}></input>
                <div className="check" onClick={()=>{saveNewPage()}}>✔️</div>
            </div>
            :<div className="add" onClick={()=>{setAdd(true)}}>➕</div>}
            
               
        </div>

        <div className="sidebar_editor">

        </div>
        </div>
    );
}