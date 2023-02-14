import { useState } from 'react';
import '../features/together/Together.style.scss';
import Banner from '../components/banner/Banner';
import TogetherList from '../features/together/TogetherList';
import TogetherModalCreate from '../features/together/TogetherModalCreate';
import BlackOut from '../components/blackout/BlackOut';
import { useEffect } from 'react';
import { getTogetherList } from "../features/together/TogetherSlice"
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/button/Button';
import Swal from 'sweetalert2';

const TogetherPage = () => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false);
  const myNickname = useSelector(state => state.member.nickName)
  const isOpenModal = () => {
    if (!myNickname) {
      Swal.fire(
        "로그인이 필요한 서비스 입니다.",
        "로그인 페이지로 이동합니다.",
        "warning"
      )
      return (
        <>
          {/* 로그인 모달창 이동 */}
        </>
      )
    }
    setIsOpen(!isOpen);
  };

  const { togetherList } = useSelector((state) => state.together)

  useEffect(() => {
    dispatch(getTogetherList())
  }, [])

  return (
    <>
      <Banner bannerStyle={'together-ban'} />
      <div className="container">
        <h2 className='together-h2'>투게덕</h2>
        {/* <button onClick={isOpenModal}>방 만들기</button> */}
        <Button onClickEvent={isOpenModal} text={"방만들기"} btnStyle={"together-btn"} />
        <TogetherList togetherList={togetherList} />
        {isOpen && <TogetherModalCreate isOpenModal={isOpenModal} />}
        {isOpen && <BlackOut onClickEvent={isOpenModal} />}
      </div>
    </>
  );
};

export default TogetherPage;
