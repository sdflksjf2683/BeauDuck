import './Single.style.scss';
import Banner from '../components/banner/Banner';
import SingleList from '../features/single/SingleList';
import SingleModalCreate from '../features/single/SingleModalCreate ';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMakeupList, recommendMakeup } from '../features/single/SingleSlice';
import { useState } from 'react';
import SingleModalRecommend from '../features/single/SingleModalRecommend';
import BlackOut from '../components/blackout/BlackOut';
import SingelModalNoRecommend from '../features/single/SingleModalNoRecommend';
import Button from '../components/button/Button';

const SinglePage = () => {
  const dispatch = useDispatch();
  //  const {makeupList, recommendList} = useSelector(state => state.single)
  // 최초에 메이크업 리스트 불러오기
  useEffect(() => {
    dispatch(getMakeupList());
  }, [dispatch]);

  // 추천 받기
  const [isRecommend, setIsRecommend] = useState(false);
  const user_id = 1; // 나중에 찐 아이디로 교체
  const popRecommend = () => {
    dispatch(recommendMakeup(user_id));
    setIsRecommend(!isRecommend);
  };

  // 새로운 메이크업 만들기
  const [isMake, setIsMake] = useState(false);

  const onToggleMake = () => {
    setIsMake(!isMake);
  };

  const makeupList = [
    {
      id: 1,
      title: '데일리 메이크업',
      score: 4.5,
      count: 120,
      img: 'https://i.pinimg.com/236x/00/23/13/0023139711735d03774be660adcad98c.jpg',
    },
    {
      id: 2,
      title: '물광 메이크업',
      score: 4.3,
      count: 20,
      img: 'https://i.pinimg.com/236x/86/2f/31/862f310c3e879aefcbf50748758e32cc.jpg',
    },
    {
      id: 3,
      title: '데일리 메이크업',
      score: 4.5,
      count: 120,
      img: 'https://i.pinimg.com/236x/00/23/13/0023139711735d03774be660adcad98c.jpg',
    },
    {
      id: 4,
      title: '물광 메이크업',
      score: 4.3,
      count: 20,
      img: 'https://i.pinimg.com/236x/86/2f/31/862f310c3e879aefcbf50748758e32cc.jpg',
    },
    {
      id: 5,
      title: '데일리 메이크업',
      score: 4.5,
      count: 120,
      img: 'https://i.pinimg.com/236x/00/23/13/0023139711735d03774be660adcad98c.jpg',
    },
    {
      id: 6,
      title: '물광 메이크업',
      score: 4.3,
      count: 20,
      img: 'https://i.pinimg.com/236x/86/2f/31/862f310c3e879aefcbf50748758e32cc.jpg',
    },
  ];

  return (
    <>
      <Banner bannerStyle={'single-ban'} />
      <div className="container">
        <button className="makeup-recommend-btn" onClick={popRecommend}>
          나에게 어울리는 메이크업 추천 받기
        </button>
        {/* 추천 받을 수 있는지 없는지 */}
        {isRecommend && <SingleModalRecommend popRecommend={popRecommend} />}
        {isRecommend && <BlackOut onClickEvent={popRecommend} />}
        {/* <SingelModalNoRecommend /> */}

        <h2 className="single-h2">인기 메이크업</h2>
        <hr className="single-hr" />
        <Button text={'만들기'} onClickEvent={onToggleMake} />
        <SingleList modeList={makeupList} />
        {isMake && <SingleModalCreate onToggleMake={onToggleMake} />}
        {isMake && <BlackOut onClickEvent={onToggleMake} />}
      </div>
    </>
  );
};

export default SinglePage;
