import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import SingleModalInfo from './SingleModalInfo';

const SingleListItem = ({ modeItem }) => {
  const [isInfo, setIsInfo] = useState(false);

  const isToggleInfo = () => {
    setIsInfo(!isInfo);
  };

  return (
    <>
      <div className="makeup-div" onClick={isToggleInfo}>
        <img src={modeItem.img} alt="img" />
        <p>{modeItem.title}</p>
        <div className="star-info">
          <FontAwesomeIcon className="star-icon" icon="fa-solid fa-star" />
          <p>{modeItem.score}</p>
          <p>({modeItem.count})</p>
        </div>
      </div>
      {isInfo ? <SingleModalInfo isInfo={isInfo} modeItem={modeItem} /> : <></>}
    </>
  );
};

export default SingleListItem;
