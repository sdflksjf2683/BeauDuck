import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import face1 from '../../assets/faces/face1.png';
import face2 from '../../assets/faces/face2.png';
import face3 from '../../assets/faces/face3.png';
import face4 from '../../assets/faces/face4.png';
import face5 from '../../assets/faces/face5.png';
import face6 from '../../assets/faces/face6.png';
import face7 from '../../assets/faces/face7.png';
import face8 from '../../assets/faces/face8.png';
import { getConsultDetail } from './ConsultingSlice';

const ConsultingModalLoadingHost = () => {
  const dispatch = useDispatch();
  const { roomId, consultDetail, userList } = useSelector(
    (state) => state.consulting,
  );
  console.log('roomId', roomId);

  useEffect(() => {
    dispatch(getConsultDetail(roomId));
  }, [userList]);

  console.log('유저리스트!', userList);

  return (
    <div className="loading-modal">
      <button className="loading-bigbtn">START</button>
      <h3 className="loading-h3">대기 리스트</h3>
      <div className="loading-list">
        {userList?.map((user) => (
          <div className="each-user">
            <span className="username">{user.nickname}</span>
            <span className={['onoff', 'on-btn'].join(' ')}>ON</span>
            <span className={['onoff', 'off-btn'].join(' ')}>OFF</span>
          </div>
        ))}
        {/* <img
          src={face1}
          alt=""
          style={{ width: '100px', height: '100px', borderRadius: '100px' }}
        /> */}
      </div>
    </div>
  );
};

export default ConsultingModalLoadingHost;
