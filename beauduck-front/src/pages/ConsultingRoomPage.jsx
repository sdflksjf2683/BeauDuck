import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
// import CustomRoomComponent from "../openvidu/components/CustomRoomComponent";
import VideoRoomComponent from "../openvidu/components/VideoRoomComponent";

// 컨설팅 받는 페이지
// roomId로 data dispatch
// 후에 useSelector 로 hostNickname, userCount, userList 받아오기

const ConsultingRoomPage = () => {
  // location으로 받아온 데이터 
  // roomId, 
  // consultDetail = {content, hostId, hostNickname, roomId, title, userCount, userList = {nickname, userId}}
  const location = useLocation()
  const { state } = location
  const myNickname = useSelector(state => state.member.nickName)

  console.log("내려주는 값", state)
  return (
    <div className="full-screen">
      <VideoRoomComponent 
        sessionName={state.roomId}
        host={state.hostNickname}
        myUserName={myNickname}
        userList={state.userList}
      />
    </div>
  );
};

export default ConsultingRoomPage;
