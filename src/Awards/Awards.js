import React, { useState,useEffect } from "react";
import styled from "styled-components";
import css from "./Awards.css";
import trophy from "./trophy.png";
import ReactMarkdown from 'react-markdown';
function Awards(){

    // '\n' 문자열을 br 태그로 변경하는 함수
    const renderNewLine = (props) => <br key={props.key} />;

    return(
        <div className="screen_awards">
            <section className="nav_awards">
                네비 부분임
            </section>
            <section className="header_awards">
                <img className = "header_image"  src={trophy} alt='awards_image' />
                <h1 className="title"> 수상내역 </h1>
                <p className="title_intro"> 가온누리 역대 수상내역입니다. </p>
            </section>
            <section className="body_awards">
                <div className="body_btns">
                    <button className="btn_all">수정 </button>
                    <button className="btn_all">확인 </button>
                </div>
                <p className="body_detail">
                    <ReactMarkdown escapeHtml={false} renderers={{ text: renderNewLine }}>
                        **2023** 상장1, 상장2
                    </ReactMarkdown>                

                </p>

            </section>
            
        </div>
    );
}

export default Awards;
