import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import BoardPage from './pages/BoardPage';
import BoardWritePage from './pages/BoardWritePage';
import ConsultingPage from './pages/ConsultingPage';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFount';
import ProfilePage from './pages/ProfilePage';
import NaverLogin from './features/login/NaverLogin';
import SinglePage from './pages/SinglePage';
import TogetherPage from './pages/TogetherPage';

// import { getInfoList, getQaList } from './features/board/BoardSlice';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBattery } from '@fortawesome/free-solid-svg-icons';
import { faBatteryQuarter } from '@fortawesome/free-solid-svg-icons';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import BoardInfoPage from './pages/BoardInfoPage';
import BoardQnAPage from './pages/BoardQnAPage';
import Footer from './components/footer/Footer';
import SingleResultPage from './pages/SingleResultPage';
import SingleModePage from './pages/SingleModePage';
import RankingPage from './pages/RankingPage';
import SingupPage from './pages/SignupPage';

library.add(
  faXmark,
  faBattery,
  faBatteryQuarter,
  faCircleChevronLeft,
  fasStar,
  farStar,
  faUser,
  faCaretLeft,
  faCaretRight,
  faBackward,
  faForward,
  faPlus,
  faMinus,
  faDroplet,
  faAngleLeft,
  faAngleRight,
);

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route 
            element={<ProtectedRoute token={token} nickname={nickname} />}> */}
          {/* 도와덕 */}
          <Route path="/help" element={<ConsultingPage />} />
          {/* 따라해덕 */}
          <Route path="/single" element={<SinglePage />} />
          <Route path="/single/mode" element={<SingleModePage />} />
          <Route path="/single/result" element={<SingleResultPage />} />
          {/* 투게덕 */}
          <Route path="/together" element={<TogetherPage />} />
          {/* 쑥덕쑥덕 */}
          <Route path="/board" element={<BoardPage />} />
          <Route path="/board/write" element={<BoardWritePage />} />
          <Route path="/board/info/:id" element={<BoardInfoPage />} />
          <Route path="/board/qna/:id" element={<BoardQnAPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          {/* 랭킹 페이지 */}
          <Route path="/rank" element={<RankingPage />} />
          {/* </Route> */}
          <Route path="/Api/Naver" element={<NaverLogin />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SingupPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
