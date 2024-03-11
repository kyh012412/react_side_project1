import { useEffect, useReducer, useState } from 'react';
import CardInGame from './CardInGame';

/** @todo todoList
  카드의 개수 입력을 받아야함
  카드가 최대 6부이지만 조합으로 카드 증식하는방법?
*/

/**
 * @param {*} num 몇 장으로 시작할지 입력받는 외부변수
 * @param {*} jsonPath 카드 덱 구성을 위한 카드들의 기초정보 imagePath와 name(asset정보)가 있음
 * @returns 필요한 카드의 수만큼 뒷면이 출력되는 반환
 */

const ACTION_TYPE = {
  SETTING: 'setting',
  PAUSE: 'pause',
  FLIP: 'flip',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.SETTING:
      return cardSetting(action.payload);
    case ACTION_TYPE.PAUSE:
      return state;
    case ACTION_TYPE.FLIP:
      return state;
    default:
      return state;
  }
};

const cardSetting = ({ num, datas }) => {
  console.log(typeof num, num);
  num = parseInt(num); // 하프값 num
  const newDeckCount = num / datas.length;
  console.log('필요한 새로운덱 :', newDeckCount);
  let tempArray = [];
  //newDeckCount가 0일 때는 작동하지 않음
  for (let i = 0; i < newDeckCount; i++) {
    for (let j = 0; j < datas.length; j++) {
      const tempInputValue = datas[j];
      tempInputValue = { ...tempInputValue, id: Date.now() };
      tempArray.push(tempInputValue);
      tempArray.push(tempInputValue);
    }
  }
  const newCardCount = num % datas.length;
  for (let i = 0; i < newCardCount; i++) {
    let tempInputValue = datas[i];
    tempInputValue.id = Date.now();
    tempArray.push(tempInputValue);
    tempArray.push(tempInputValue);
  }
  console.log('완성된 Array', tempArray);
  console.log(tempArray);
  return tempArray;
};

const BoardInGame = ({ num = 2, jsonPath = '/cardData.json' }) => {
  /** 뒤집을 두장 중 첫번째를 지칭하는 변수 */
  const [firstCard, setFirstCard] = useState();

  /** 덱의 기본정보를 만들수 있는 datas */
  const [datas, setDatas] = useState([]);

  /** 배열안에는 객체들이 들어가고 객체에는 imagePath와name이 차례로 들어감 */
  const [cardsInBoard, setCardsInBoard] = useReducer(reducer, []);

  const fetchJsonData = async () => {
    const response = await fetch(jsonPath);
    // console.log(response);
    const jsonData = await response.json();
    // console.log(jsonData);
    setDatas(jsonData);
  };

  useEffect(() => {
    fetchJsonData();
    // setCardsInBoard({
    //   type: ACTION_TYPE.SETTING,
    //   payload: { num, datas },
    // });
    console.log(datas);
  }, []);
  console.log(datas);

  return (
    <div className="Board">
      {cardsInBoard.length > 0 &&
        cardsInBoard.map((data, idx) => (
          <CardInGame
            name={data.name}
            imagePath={data.imagePath}
            firstCard={firstCard}
            setFirstCard={setFirstCard}
          />
        ))}
      {cardsInBoard <= 0 && <h1>????</h1>}
    </div>
  );
};
export default BoardInGame;
