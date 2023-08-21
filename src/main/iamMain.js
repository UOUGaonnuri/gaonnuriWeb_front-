import React from "react";
import tiger from "./image/image 5.png";
import unreal from "./image/image 11.png";
import baekjoon from "./image/image 28.png";
import unity from "./image/image 21.png";
import pytorch from "./image/image 20.png";
import spring from "./image/image 19.png";
import reactLogo from "./image/image 17.png";
import kotlin from "./image/image 16.png";
import programmers from "./image/image 29.png";
import nodeJs from "./image/image 18.png";
import './iamMain.css';
import Topbar from "./Topbar";

function Main() {
  return (
    <div className="main">
      <Topbar />
      <div className="mainTop">
        <img src={tiger} alt='gaonnuri'></img>
        <span className="topFirst">가온누리</span>
        <span className="topSecond">세상의 중심. IT의 중심 가온누리</span>
        <span className="topThird">울산대학교 IT동아리 가온누리 </span>
      </div>
      <div className="mainBottom">
        <span className="studyThemes">활동 분야</span>
          <span className="webandAppTheme">웹/앱</span>
          <div className="webAndAppImages">
            <div className="spring">
              <img src={spring} alt='spring'></img>
            </div>
            <img src={kotlin} alt='kotlin'></img>
            <img src={reactLogo} alt='reactLogo'></img>
            <img src={nodeJs} alt='nodeJs'></img>
          </div>
          <span className="aiTheme">AI</span>
          <div className="aiImages">
          <img src={pytorch} alt='pytorch'></img>
          </div>
          <span className="gameTheme">게임</span>
          <div className="gameImages">
            <img src={unity} alt='unity'></img>
            <img src={unreal} alt='unreal'></img>
          </div>
          <span className="algorithmTheme">알고리즘</span>
          <div className="algorithmImages">
            <img src={baekjoon} alt='baekjoon'></img>
            <img src={programmers} alt='programmers'></img>
          </div>
      </div>
    </div>
  );
}

export default Main;