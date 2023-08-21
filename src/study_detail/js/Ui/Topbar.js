import React, { useState } from "react";

import "../../css/Topbar.scss";

import { Route } from "react-router-dom";

import tiger from "../../../main/image/image 5.png";
import smallTiger from "../../../main/image/인쇄용-1 1.png";
import { Link } from "react-router-dom";


export function Topbar(){
    return(
        <div className="topBar">
        <div className="goToMain">
          <Link to="/gaonnuri"><img src={smallTiger} alt='smallTiger'></img></Link>
        </div>
        <div className="goToIntroduce">
          <span>소개</span>
        </div>
        <div className="goToFeed">
          <span>게시판</span>
        </div>
        <div className="goToProject">
          <span>프로젝트</span>
        </div>
        <div className="goToStudy">
        <Link to="/studymain">스터디</Link>
        </div>
        <div className="goToMember">
          <span>멤버</span>
        </div>
        <div className="goToTrophy">
          <span>수상내역</span>
        </div>
      </div>)
}
