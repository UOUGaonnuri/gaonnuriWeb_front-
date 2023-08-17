import React, { useState } from "react";

import "../../css/Navbar.scss";

import { Route } from "react-router-dom";
import gaon from "../../source/gaon.png"

export function Navbar(){
    return(
    <div className="ComNavbar">
        <ul>
            <img className="gaon_logo" src={gaon}></img>
            <div className="navui" onClick={()=>{}} >소개</div>
            <div className="navui" onClick={()=>{}} >게시판</div>
            <div className="navui" onClick={()=>{}} >프로젝트</div>
            <div className="navui" onClick={()=>{}} >스터디</div>
            <div className="navui" onClick={()=>{}} >멤버</div>
            <div className="navui" onClick={()=>{}} >수상내역</div>
        </ul>
    </div>)
}
