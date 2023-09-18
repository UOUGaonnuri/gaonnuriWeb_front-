import React, { useState,useEffect } from "react";
import css from "./Awards.css";
import trophy from "./trophy.png";
import ReactMarkdown from 'react-markdown';
import Topbar from "../main/Topbar";
import axios from "axios";
import TextareaAutosize from 'react-textarea-autosize';

function Awards(){

    // '\n' 문자열을 br 태그로 변경하는 함수
    const renderNewLine = (props) => <br key={props.key} />;
    const [awardsText, set_awardsText]  = useState("가온누리 **역대 수상내역** 기록입니다.");
    const [modifyMode, set_modifyMode] = useState(false); // 수정상태 확인 state
    // inputModify 텍스트박스
    const [inputModify, set_inputModify] = useState("");



    function awardsGet(){
        const url = "http://43.200.191.238:4000/api/awards/get";
        axios.get(url)
        .then((response) => {

            console.log(response);
            console.log(response.data);
            set_awardsText(response.data.contents);
            set_inputModify(response.data.contents);
        })
        .catch((error) => {
            console.error('Error(에러발생!): ', error);
        })
    }
    useEffect(()=>{
        awardsGet();
    },[])




    
    const saveInputModify = event => {
        set_inputModify(event.target.value);
        
        // console.log(inputModify);
    }

    useEffect(() =>{
        console.log(inputModify);
    },[inputModify])
    

    // Post
    function awardsToBackend(){
        const url = "http://43.200.191.238:4000/api/awards/add";
        const contents = { "contents" : inputModify };

        axios.post(url,contents)
        .then((response) => {
            console.log(response);
            console.log(response.data);
            awardsGet();
        })
        .catch((error) => {
            console.error('Error(에러발생!): ', error);
        })
    }

    const BodyDeatil = () =>{
        return(
            <ReactMarkdown className = "body_detail" escapeHtml={false} renderers={{ text: renderNewLine }}>
                {awardsText}
            </ReactMarkdown>
        );
  
    }
    return(
        <div className="screen_awards">
            <section className="nav_awards">
                <Topbar></Topbar>
            </section>
            <section className="header_awards">
                <img className = "header_image"  src={trophy} alt='awards_image' />
                <h1 className="title"> 수상내역 </h1>
                <p className="title_intro"> 가온누리 역대 수상내역입니다. </p>
            </section>
            <section className="body_awards">
                <div className="body_btns">
                    <button className="btn_all" onClick={() => {set_modifyMode(true);}} >수정 </button>
                    {modifyMode === true ? <button className="btn_all" onClick={() => {awardsToBackend(); set_modifyMode(false);}}>확인 </button>  : <></>}
                </div> 

                {modifyMode === true ? <TextareaAutosize className="body_input" onChange={saveInputModify} value={inputModify}/>  : <BodyDeatil ></BodyDeatil>}

                

            </section>
            
        </div>
    );
}

export default Awards;
