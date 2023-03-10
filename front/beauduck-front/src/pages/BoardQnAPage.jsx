import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import BlackOut from '../components/blackout/BlackOut';
import Button from '../components/button/Button';
import ExitModal from '../components/modal/ExitModal';
import BoardAnswerCreate from '../features/board/BoardAnswerCreate';
import BoardAnswerList from '../features/board/BoardAnswerList';
import {
  getQaBoard,
  removeQaBoard,
  updateQaBoard,
} from '../features/board/BoardSlice';
import board3 from "../assets/board/board3.png"

const BoardQnAPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { nowBoard, commentList } = useSelector((state) => state.board);

  const titleRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    dispatch(getQaBoard(id));
  }, [dispatch, id]);

  const [isUpdate, setIsUpdate] = useState(false);
  const [title, setTitle] = useState(nowBoard.title);
  const [content, setContent] = useState(nowBoard.content);

  const { memberId } = useSelector((state) => state.member);

  const date = nowBoard.created_date + '';

  const onToggleUpdate = () => {
    setTitle(nowBoard.title);
    setContent(nowBoard.content);
    setIsUpdate(!isUpdate);
  };

  const updateBoard = () => {
    if (!title) {
      titleRef.current.focus();
      return;
    }
    if (!content) {
      contentRef.current.focus();
      return;
    }

    const updatedBoard = {
      title,
      content,
      memberEntity: {
        memberId: nowBoard.memberId,
      },
      writer: nowBoard.writer,
    };

    const payload = {
      updatedBoard,
      boardId: id,
    };

    dispatch(updateQaBoard(payload));
    setIsUpdate(!isUpdate);
  };

  const [isRemove, setIsRemove] = useState(false);
  const onToggleRemove = () => {
    setIsRemove(!isRemove);
  };

  const removeBoard = () => {
    dispatch(removeQaBoard(id));
    navigate('/board', { replace: true }); // board ???????????? ?????????
  };

  return (
    <div className={['container', 'container-colored'].join(' ')}>
      <div className="qna-board">
        <div className="alpha-mark">Q</div>
        <div className="board-qa-title">
          {!isUpdate ? (
            <h1>{nowBoard?.title}</h1>
          ) : (
            <input
              className="board-qa-title-input"
              type="text"
              ref={titleRef}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          )}
        </div>
        {memberId === nowBoard.memberId && (
          <div>
            {!isUpdate ? (
              <Button
                onClickEvent={onToggleUpdate}
                text={'??????'}
                btnStyle={'board-update'}
              />
            ) : (
              <Button
                onClickEvent={updateBoard}
                text={'??????'}
                btnStyle={'board-update'}
              />
            )}
            {!isUpdate ? (
              <Button
                onClickEvent={onToggleRemove}
                text={'??????'}
                btnStyle={'board-remove'}
              />
            ) : (
              <Button
                onClickEvent={onToggleUpdate}
                text={'??????'}
                btnStyle={'board-remove'}
              />
            )}
            {isRemove && (
              <ExitModal
                title={'????????? ?????????????????????????'}
                content={'????????? ???????????? ????????? ??? ????????????.'}
                btnText={'??????'}
                onClickEvent={removeBoard}
                xmarkClickEvent={onToggleRemove}
              />
            )}
          </div>
        )}
        {isRemove && <BlackOut onClickEvent={onToggleRemove} />}
        <div className="user-box">
          <img 
            className="img-replace"
            src={board3}
            alt="??????????????????"
            style={{ border: "1px solid black" }}
          />
          <div className="user-text">
            <p>{nowBoard?.writer}</p>
            <div>
              <span>{date.slice(0, 10)}</span>
              <span>??????</span>
              <span>{nowBoard?.count}</span>
            </div>
          </div>
        </div>
        <div className="board-content">
          {!isUpdate ? (
            <p>{nowBoard?.content}</p>
          ) : (
            <textarea
              className="board-qa-content-input"
              value={content}
              ref={contentRef}
              onChange={(e) => setContent(e.target.value)}
            />
          )}
        </div>
      </div>
      <BoardAnswerList commentList={commentList} boardId={id} />
      <BoardAnswerCreate boardId={id} />
    </div>
  );
};

export default BoardQnAPage;
