import './Board.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { newInfoBoard, newQaBoard } from '../features/board/BoardSlice';
import TabButton from '../components/button/TabButton';
import Button from '../components/button/Button';
import { useRef } from 'react';
import ExitModal from '../components/modal/ExitModal';
import BlackOut from '../components/blackout/BlackOut';

const BoardWritePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const titleRef = useRef();
  const contentRef = useRef();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [isInfo, setIsInfo] = useState(true);

  const setInfo = () => {
    setIsInfo(true);
  };

  const setQa = () => {
    setIsInfo(false);
  };

  const [cantModal, setCantModal] = useState(false);

  const { memberId, nickName } = useSelector((state) => state.member);

  const BoardCreate = async () => {
    if (!title) {
      titleRef.current.focus();
      return;
    }
    if (!content) {
      contentRef.current.focus();
      return;
    }
    const newBoard = {
      isActive: true,
      title,
      memberEntity: {
        memberId,
      },
      writer: nickName,
      content,
    };

    if (isInfo) {
      dispatch(newInfoBoard(newBoard)).then((res) => {
        const newBoardId = res.payload;
        if (newBoardId !== undefined) {
          navigate(`/board/info/${newBoardId}`);
        } else {
          setCantModal(!cantModal);
        }
      });
    } else {
      dispatch(newQaBoard(newBoard)).then((res) => {
        const newBoardId = res.payload;
        if (newBoardId !== undefined) {
          navigate(`/board/qna/${newBoardId}`);
        } else {
          setCantModal(!cantModal);
        }
      });
    }
  };

  return (
    <div className="container">
      <div className="go-back" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon="fa-solid fa-circle-chevron-left" />
        <span>?????? ??????</span>
      </div>
      <div className="write-form">
        <div className="form-header">
          <h3>?????????</h3>
          <Button type="button" text={'??????'} onClickEvent={BoardCreate} btnStyle={"board-btn"} />
        </div>
        {/* <hr /> */}
        <TabButton
          text={'???????????????'}
          onClick={setInfo}
          addClass={isInfo && 'selected'}
        />
        <TabButton
          text={'???????????????'}
          onClick={setQa}
          addClass={!isInfo && 'selected'}
        />
        <br />
        <input
          className="input-title"
          type="text"
          placeholder="????????? ??????????????????."
          ref={titleRef}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="input-content"
          placeholder="????????? ???????????????."
          ref={contentRef}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      {cantModal && (
        <ExitModal
          title={'??????'}
          content={'???????????? ????????? ??? ????????????.'}
          btnText={'??????'}
          onClickEvent={() => setCantModal(!cantModal)}
          xmarkClickEvent={() => setCantModal(!cantModal)}
        />
      )}
      {cantModal && <BlackOut onClickEvent={() => setCantModal(!cantModal)} />}
    </div>
  );
};

export default BoardWritePage;
