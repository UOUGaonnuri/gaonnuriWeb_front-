import {
  BrowserRouter as Router,
  Routes, //
  Route,  //path의 경로에 렌더링 해줌
  Link //라우터에서 다른 라우터로 새로고침 필요 없이 갈 수 있게 해줌
} from "react-router-dom";

import './App.css';
import { StudyMain } from './StudyList/StudyMain';

//이하은
import { StudyDetailMain } from "./study_detail/js/StudyDetailMain";
import Main from "./main/iamMain";
import Awards from "./Awards/Awards";
import { BackOfiiceMain } from "./Back_Office/js/BackOfficeMain";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/studymain" element={<StudyMain />} />
      <Route path="/studymain/detail" element={<StudyDetailMain/>}/>
      <Route path="/awards" element={<Awards/>}/>
      <Route path="/back_office" element={<BackOfiiceMain/>}/>
    </Routes>
    </Router>
  );
}

export default App;
