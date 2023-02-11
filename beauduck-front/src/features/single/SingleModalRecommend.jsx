import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome/index';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const SingleModalRecommend = ({ popRecommend }) => {
  const navigate = useNavigate();
  const { nickName } = useSelector((state) => state.member);
  const { recommendList } = useSelector((state) => state.single);

  const closeModal = () => {
    popRecommend();
  };

  return (
    <div className="recommend-modal">
      <FontAwesomeIcon
        className="recommend-xmark"
        icon="fa-solid fa-xmark"
        onClick={closeModal}
      />
      <h3>{nickName}님에게 어울리는 추천 메이크업</h3>
      {recommendList.length != 0 ? (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={3}
          pagination={{ clickable: true }}
        >
          <>
            {recommendList.map((item) => (
              <SwiperSlide>
                <div className="recommended-makeup-div">
                  <img src={item?.img} alt="img" />
                  <p>{item?.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </>
        </Swiper>
      ) : (
        <>
          <p>메이크업 추천에 사용될 사진이 없습니다.</p>
          <button onClick={() => navigate('/profile')}>찍으러 가기</button>
        </>
      )}
      {recommendList === 'error' ? (
        <>
          <p>얼굴 사진이 정확하지 않아 인식할 수 없습니다</p>
          <p>가이드를 준수하여 재촬영하십시오.</p>
          <button onClick={() => navigate('/profile')}>찍으러 가기</button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SingleModalRecommend;
