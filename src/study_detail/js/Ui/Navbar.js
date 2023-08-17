import React, { useState } from "react";

import "../../css/Navbar.scss";

import { Route } from "react-router-dom";


export function Navbar(){
    return(
    <div className="Navbar">
        <ul>
            <ui>소개</ui>
            <ui>게시판</ui>
            <ui>프로젝트</ui>
            <ui>스터디</ui>
            <ui>멤버</ui>
            <ui>수상내역</ui>
        </ul>
    </div>)
}
