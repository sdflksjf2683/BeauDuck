import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMemo } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getConsultDetail, loadingOut } from './ConsultingSlice';

const ConsultingModalLoadingHost = ({ loadingOff }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { roomId, consultDetail } = useSelector((state) => state.consulting);
  const { userList } = useSelector((state) => state.consulting);

  useEffect(() => {
    dispatch(getConsultDetail(roomId));
  }, []);

  // useEffect(() => {
  //   setInterval(() => {
  //     console.log('업데이트!');
  //   }, 5000);
  // });

  const handleStart = () => {
    dispatch(loadingOut());
    navigate('/help/room');
  };

  return (
    <div className="loading-modal">
      {/* 다만 방 삭제 로직을 넣어야 함 */}
      <FontAwesomeIcon
        className="back-icon"
        icon="fa-solid fa-circle-chevron-left"
        onClick={loadingOff}
      />
      <h3>시작하기</h3>
      <button
        type="button"
        className="loading-bigbtn"
        onClick={() => {
          handleStart();
        }}
      >
        START
      </button>
      {/* <h3 className="loading-h3">대기 리스트</h3> */}
      {/* <p>{userList.length}</p> */}
    </div>
  );
};

export default ConsultingModalLoadingHost;
