import {
  BrowserRouter as Router,
  Routes, //
  Route,  //path의 경로에 렌더링 해줌
  Link //라우터에서 다른 라우터로 새로고침 필요 없이 갈 수 있게 해줌
} from "react-router-dom";

import './App.css';
// 이런식으로 자신의 js파일을 import해서 아래처럼 추가시키면 됩니다!
// 저 같은 경우는 function StudyMain에 전부 모아둬서 해당 함수를 추가시켰습니다.
import { StudyMain } from './StudyList/StudyMain';

//이하은
import { StudyDetailMain } from "./study_detail/js/StudyDetailMain";
import Main from "./main/iamMain";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/gaonnuri" element={<Main />} />
      <Route path="/studymain" element={<StudyMain />} /> {/*스터디 목록*/}
      {/* path는 http://localhost:3000/studymain <- 이런식으로 :3000 뒤에 붙일 경로를 마음대로 지으면 됩니다. */}
      {/* 하다가 잘 모르겠으면 카톡 보내주셔도 됩니다 -현지- */}
      <Route path="/studymain/detail" element={<StudyDetailMain/>}/>
    </Routes>
    </Router>
  );
}

export default App;
