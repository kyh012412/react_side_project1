import { useContext, useState } from 'react';
import '../css/farm.css';
import { FirstCardContext } from '../context/FirstCardContext';
import { BoardOptionsContext } from '../context/BoardOptionsContext';

/**
 * @param {String} name meta이름
 * @param {String} imagePath 이미지 경로
 * @returns
 */
const CardInGame = ({
  idx,
  name,
  imagePath,
  isDisabled,
  isFlipped,
  setCardsInBoard,
  setFirstCard,
  ACTION_TYPE,
}) => {
  const firstCard = useContext(FirstCardContext);
  const BoardOption = useContext(BoardOptionsContext);

  return (
    <div
      data-idx={idx}
      data-name={name}
      className={`card ${isFlipped ? 'flip' : ''}`}
      onClick={(e) =>
        setCardsInBoard({
          type: ACTION_TYPE.FLIP,
          payload: {
            firstCard,
            thisCard: e.currentTarget,
            setFirstCard,
            BoardOption,
          },
        })
      }
    >
      <img className="front" src={imagePath} alt="Card front" />
      <img className="back" src="/img/card/question.svg" alt="Card back" />
    </div>
  );
};

export default CardInGame;
