import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import BoardPage from './pages/BoardPage';
import BoardWritePage from './pages/BoardWritePage';
import ConsultingPage from './pages/ConsultingPage';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import ProfilePage from './pages/ProfilePage';
import NaverLogin from './features/login/NaverLogin';
import SinglePage from './pages/SinglePage';
import TogetherPage from './pages/TogetherPage';
import BoardInfoPage from './pages/BoardInfoPage';
import BoardQnAPage from './pages/BoardQnAPage';
import Footer from './components/footer/Footer';
import SingleResultPage from './pages/SingleResultPage';
import SingleModePage from './pages/SingleModePage';
import SingupPage from './pages/SignupPage';
import ScrollToTop from './components/scrolltotop/ScrollToTop';
import ConsultingRoomPage from './pages/ConsultingRoomPage';
import ConsultingResultHostPage from "./pages/ConsultingResultHostPage"
import TogetherRoomPage from "./pages/TogetherRoomPage"

// import { getInfoList, getQaList } from './features/board/BoardSlice';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBattery } from '@fortawesome/free-solid-svg-icons';
import { faBatteryQuarter } from '@fortawesome/free-solid-svg-icons';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
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
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { accessLogin, getMemberId } from './features/login/MemberSlice';
import InfoPage from './pages/InfoPage';
import { getAccessToken } from './api/cookie';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import InfoDetailPage from './pages/InfoDetailPage';

library.add(
  faXmark,
  faBattery,
  faBatteryQuarter,
  faCircleChevronLeft,
  faCircleChevronRight,
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
  faCheck,
  faCircleCheck,
  faHeart,
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(accessLogin());
  }, []);

  const [cookies, setCookie, removeCookie] = useCookies(['accessToken']);
  const refreshToken = localStorage.getItem('refreshToken');
  // const accessToken = getAccessToken();
  const server = 'https://i8b306.p.ssafy.io:8080/';
  const { memberId } = useSelector((state) => state.member);

  // useEffect(async () => {
  //   if (memberId) {
  //     console.log('아이디있졍');
  //     const accessToken = getAccessToken();
  //     console.log(accessToken);
  //   } else {
  //     console.log('없졍');
  //   }
  //   console.log('토큰 재발급');
  //   const res = await axios.get(
  //     `${server}refresh?refreshToken=${refreshToken}`,
  //   );

  //   console.log('토큰 재발급 성공?');
  //   console.log(res.data.data.accessToken);
  //   setCookie(res.data.data.accessToken);
  // });

  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          {/* <Route 
              element={<ProtectedRoute token={token} nickname={nickname} />}> */}
          {/* 도와덕 */}
          <Route path="/help" element={<ConsultingPage />} />
          <Route path="/help/room" element={<ConsultingRoomPage />} />
          <Route path='/help/result' element={<ConsultingResultHostPage />} />
          {/* 따라해덕 */}
          <Route path="/single" element={<SinglePage />} />
          <Route path="/single/mode" element={<SingleModePage />} />
          <Route path="/single/result" element={<SingleResultPage />} />
          {/* 투게덕 */}
          <Route path="/together" element={<TogetherPage />} />
          <Route path="/together/room" element={<TogetherRoomPage />} />
          {/* 쑥덕쑥덕 */}
          <Route path="/board" element={<BoardPage />} />
          <Route path="/board/write" element={<BoardWritePage />} />
          <Route path="/board/info/:id" element={<BoardInfoPage />} />
          <Route path="/board/qna/:id" element={<BoardQnAPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          {/* </Route> */}
          <Route path="/Api/Naver" element={<NaverLogin />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SingupPage />} />
          {/* 정보성페이지 */}
          <Route path="/color" element={<InfoPage />} />
          <Route path="/color/detail" element={<InfoDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
