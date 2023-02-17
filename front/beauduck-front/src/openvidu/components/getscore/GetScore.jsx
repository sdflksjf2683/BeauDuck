import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const GetScore = ({ nowIdx, user, resultUsers }) => {
  const [beforeIdx, setBeforeIdx] = useState(0);
  const didMount = useRef(false);

  const [isClick, setIsClick] = useState(false);
  console.log('isClick', isClick);
  console.log('beforeIdx', beforeIdx);
  console.log('nowIdx', nowIdx);
  const { memberId, nickName } = useSelector((state) => state.member);

  // 🦴 인덱스가 바뀌면 isClick을 false로 초기화
  useEffect(() => {
    if (didMount.current) {
      if (isClick) {
        if (resultUsers.current.memberId === memberId) {
          resultUsers.current.personalResults = [
            ...resultUsers.current.personalResults,
            nowIdx,
          ];
        }
        console.log('resultUsers.current', resultUsers.current);
      }
      setIsClick(false);
    } else {
      didMount.current = true;
    }
  }, [nowIdx]);

  // 버튼 클릭 이벤트
  const selectGood = () => {
    setIsClick(true);
  };

  console.log(user.nickname);

  return (
    <>
      {user.nickname === nickName && (
        <button onClick={selectGood} className="select-button">
          good
        </button>
      )}
    </>
  );
};

export default React.memo(GetScore);
