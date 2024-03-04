import { useState } from 'react';
import '../css/farm.css';

/**
 * @param {String} name meta이름
 * @param {String} imagePath 이미지 경로
 * @returns 
 */
const CardInGame = ({name, imagePath,firstCard}) => {
  const [isDisabled,setDisable] = new useState(false);
  const [isFlipped, setIsFlipped] = new useState(false); 

  const clickCard = (firstCard,thisCard)=>{
    if(isDisabled){
      return;
    }
    if(firstCard == thisCard){
      return;
    }
    if(firstCard.dataset.name == thisCard.dataset.name){
      setIsFlipped(!isFlipped);
      setDisable(true);
    }
  }

  return (
    <div className={`card ${isFlipped ? 'flip' : ''}`} data-name={name} onClick={(e)=>clickCard(firstCard,e.currentTarget)} >
      <img className="front" src={imagePath} alt="Card front" />
      <img className="back" src="/img/card/question.svg" alt="Card back" />
    </div>
  );
};

export default CardInGame;