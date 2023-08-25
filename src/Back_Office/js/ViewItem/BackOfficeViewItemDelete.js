import React from "react"


export default function Delete(props){
    return(
         <div className="view_item">
            <img height={150} src={props.value.img_src}/>
            <div className="line_1">
                <div className="title">{props.value.title}</div>
                <div className="state">{props.value.state===0 ? <>모집중</>: props.value.state===1 ? <>활동중</> : <>활동완료</>}</div>
            </div>
            <div className="line_2">
                <div className="term">{props.value.term}</div>
            </div>
            <div className="warning">해당 스터디를 삭제하시겠습니까?</div>
            <div className="can_del_btn">
                <div className="cancel">취소</div>
                <div className="delete">삭제</div>
            </div>
        </div>)
        }
   
    