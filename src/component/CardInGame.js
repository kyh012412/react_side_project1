import { useState } from 'react';
import '../css/farm.css';

/**
 * @param {String} name meta이름
 * @param {String} imagePath 이미지 경로
 * @returns 
 */
const CardInGame = ({name, imagePath}) => {
  const [isDisabled,setDisable] = new useState(false);
  const [isFlipped, setIsFlipped] = new useState(false); // 추가된 상태 변수

  const clickCard = (e)=>{
    if(isDisabled){
      return;
    }
    setIsFlipped(!isFlipped);
  }

  return (
    <div className={`card ${isFlipped ? 'flip' : ''}`} data-name={name} onClick={clickCard} {`${isDisabled?'disable':''}`}>
      <img className="front" src={imagePath} alt="Card front" />
      <img className="back" src="/img/card/question.svg" alt="Card back" />
    </div>
  );
};

export default CardInGame;