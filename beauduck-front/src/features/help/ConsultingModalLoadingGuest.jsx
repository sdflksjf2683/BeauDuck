import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';

const ConsultingModalLoadingGuest = ({ host }) => {
  const navigate = useNavigate();

  const [isReady, setIsReady] = useState(false);

  const ChangeStatus = () => {
    setIsReady(!isReady);
    // 이벤트에 준비상태 host 한테 보내는 기능 추가
  };

  const goBack = () => {
    // 방에 들어와있는 유저에서 제외하고, 모달을 닫는 로직 작성
  };

  return (
    <div className={['loading-modal', 'guest'].join(' ')}>
      <FontAwesomeIcon
        className="back-icon"
        icon="fa-solid fa-circle-chevron-left"
        onClick={goBack}
      />
      <h3>{host}님이 도움을 요청 중이덕</h3>
      <button
        onClick={ChangeStatus}
        className={['loading-bigbtn', 'guest-bigbtn'].join(' ')}
      >
        READY
      </button>
      {isReady ? (
        <FontAwesomeIcon
          className={['battery', 'full'].join(' ')}
          icon="fa-solid fa-battery-full"
        />
      ) : (
        <FontAwesomeIcon
          className={['battery', 'less'].join(' ')}
          icon="fa-solid fa-battery-quarter"
        />
      )}
      <p>중도 퇴장 시에는 패널티가 부과됩니다.</p>
    </div>
  );
};

export default ConsultingModalLoadingGuest;
