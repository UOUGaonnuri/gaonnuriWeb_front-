import React from "react";
import smallTiger from "./image/인쇄용-1 1.png";
import { Link } from "react-router-dom";

function Topbar() {
    return (
        <div className="topBar">
            <div className="goToMain">
                <div className="gaonImage">
                    <Link to="/gaonnuri" style={{textDecoration:"none", color:"black"}}><img src={smallTiger} alt='smallTiger'></img></Link>
                </div>
                <Link to="/gaonnuri" style={{textDecoration:"none", color:"black"}}>가온누리</Link> 
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
            <Link to="/studymain" style={{textDecoration:"none", color:"black"}}>스터디</Link>
            </div>
            <div className="goToMember">
                <span>멤버</span>
            </div>
            <div className="goToTrophy">
                <Link to="/awards" style={{textDecoration:"none", color:"black"}}>수상내역</Link>
            </div>
        </div>
    );
}

export default Topbar;