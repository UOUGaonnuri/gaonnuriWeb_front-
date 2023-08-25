import React from "react"


export default function Fix(props){
    return(
    <div className="view_item">
        <img height={150} src={props.value.img_src}/>
        <div className="url">이미지 URL:<input className="url_input"></input></div>
        <div className="study_name">스터디명:<input className="url_input"></input></div>
        <div className="study_term">스터디기간:<input className="url_input"></input></div>
        <div className="state">
            <div className="find">모집중</div>
            <div className="active">활동중</div>
            <div className="end">활동완료</div>
        </div>
        <div className="check_btn" onClick={()=>{props.setMode(0)}}>확인</div>
    </div>)
}
