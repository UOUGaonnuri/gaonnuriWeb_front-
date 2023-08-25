import React from "react"


export default function View (props){


    return(
    <div className="view_item" onClick={()=>{console.log("안녕하세요")}}>
        <img height={150} src={props.value.img_src}/>
        <div className="line_1">
            <div className="title">{props.value.title}</div>
            <div className="del_btn" onClick={(e)=>{e.stopPropagation(); props.setMode(2)}}>❌</div>
            <div className="edit_btn" onClick={(e)=>{e.stopPropagation(); props.setMode(1)}}>✏️</div>
        </div>
        <div className="line_2">
            <div className="term">{props.value.term}</div>
            <div className="state">{props.value.state===0 ? <>모집중</>: props.value.state===1 ? <>활동중</> : <>활동완료</>}</div>
        </div>
    </div>)
    
}