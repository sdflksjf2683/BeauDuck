import html2canvas from 'html2canvas';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Webcam from 'react-webcam';
import camera from '../../assets/camera.png';
import faceCircle from '../../assets/faceCircle.png';
import { postSaveFace } from './ProfileSlice';
import Alert from '../../components/modal/Alert';

const MyProfileSaveFace = () => {
  const dispatch = useDispatch();
  const { memberId } = useSelector((state) => state.member);

  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false)
  console.log("isActive :", isActive)
  console.log(isOpen);

  const downloadCapture = () => {
    const imgDiv = document.querySelector('#main_capture');
    // const transform = imgDiv.style.transform;
    imgDiv.style.setProperty('transform', 'none');
    html2canvas(imgDiv).then((canvas) => {
      const imgUri = canvas.toDataURL('image/jpeg');
      // const mainCapture = document.getElementById('main_capture');
      // const capture = document.createElement('img');
      // capture.setAttribute('src', imgUri);
      // capture.setAttribute('alt', 'capture');
      // capture.setAttribute('class', 'captured-img');
      // mainCapture.appendChild(capture);
      // saveAsImg(imgUri, 'yong.jpg');
      const payload = {
        memberId,
        img: imgUri,
      };
      dispatch(postSaveFace(payload));

      // setIsOpen(!isOpen);
    });
  };

  // const saveAsImg = (uri, filename) => {
  //   const link = document.createElement('a');
  //   if (typeof link.download === 'string') {
  //     link.href = uri;
  //     link.download = filename;
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   } else {
  //     window.open(uri);
  //   }
  // };

  const { haveSavedFace } = useSelector(state => state.profile)
  console.log("haveSavedFace :", haveSavedFace)

  useEffect(() => {
    if (haveSavedFace) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [])

  return (
    <div className="face-capture-div">
      <h3>?????? ????????? ?????? ??????????????? ???????????????</h3>
      <div className="user-face">
        {isOpen ? (
          <Alert text={'??????'} onClickEvent={() => setIsOpen(!isOpen)} />
        ) : (
          ''
        )}
        <div id="main_capture">
          {/* <div id="main_capture"> */}
          <Webcam
            audio={false}
            screenshotFormat="image/jpeg"
            className="webcam"
          />
          {/* </div> */}
          <img id="faceCircle" src={faceCircle} alt="" />
        </div>
        <div className="guide-div">
          <img
            className="camera-img"
            src={camera}
            alt=""
            id="pick"
            onClick={downloadCapture}
          />
          <div>
            <h3>?????????</h3>
            <p> 1. ???, ??????, ???, ?????? ?????? ???????????????. </p>
            <p> 2. ??? ?????? ????????? ???????????? ?????????.</p>
            <p> 3. ????????? ????????? ???????????????.</p>
          </div>
          {isActive ? (
            <a href="/single#section1-ai">???????????? ?????? ??????</a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MyProfileSaveFace;
