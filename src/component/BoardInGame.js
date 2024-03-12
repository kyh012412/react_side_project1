import { memo, useEffect, useMemo, useReducer, useState } from 'react';
import CardInGame from './CardInGame';
import { FirstCardContext } from '../context/FirstCardContext';
import { BoardOptionsContext } from '../context/BoardOptionsContext';

/** @todo todoList
  카드의 개수 입력을 받아야함
  카드가 최대 6부이지만 조합으로 카드 증식하는방법?
  셔플필요
  카드에 id입력필요
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
  UNLOCK: 'unlock',
};

const isEmpty = (somethingObject) => {
  if (Object.keys(somethingObject).length === 0) {
    return true;
  }
  return false;
};

const turnFlipNthIdxCard = (state, idx) => {
  const thisCardInfo = {
    ...state[idx],
    isFlipped: !state[idx].isFlipped,
  };
  state[idx] = thisCardInfo;
  return [...state];
};

const reducer = (state, action) => {
  console.log('reducer on');
  switch (action.type) {
    case ACTION_TYPE.SETTING:
      console.log('reducer setting asked');
      return cardSetting(action.payload);
    case ACTION_TYPE.FLIP:
      console.log('reducer flip asked');
      const thisCard = action.payload.thisCard;
      let firstCard = action.payload.firstCard;
      const setFirstCard = action.payload.setFirstCard;
      console.log(thisCard.dataset.idx);
      const thisCardIdx = parseInt(thisCard.dataset.idx);
      const firstCardIdx = isEmpty(firstCard)
        ? -1
        : parseInt(firstCard.dataset.idx);

      //처음 카드를 선택하는 경우
      console.log(firstCard);
      if (action.payload.boardOption.isLocked) {
        alert('너무 빨라요!');
        // 잠겨있는 경우
        return state;
      } else if (thisCardIdx === firstCardIdx) {
        //첫번째 카드를 또 고른 경우
        alert('이미 고른카드!');
        return state;

        //페어를 못 만든경우
        // idx는 더 이상 체크하지 않아도됨
      } else if (state[thisCardIdx].isDisabled) {
        alert('이미 짝을 맞춘 카드!');
        return state;
      }
      if (isEmpty(firstCard)) {
        console.log('첫번째 카드 없음 감지');
        setFirstCard(thisCard);
        return turnFlipNthIdxCard(state, thisCardIdx);
      } else if (thisCard.dataset.name !== firstCard.dataset.name) {
        //1~2초 뒤에 다시 자동으로 뒤집을수있게 변수하나를 바꿔줘야하며
        //변수에 따라서 useEffect로 n초후 2개의 카드가 다시 뒤집어질수있게 idx를 저장해야한다.
        // lock 변수도 있어야함
        setFirstCard({});
        action.payload.setBoardOption({
          isLocked: true,
          isFlipBooked: true,
          idxes: [thisCardIdx, firstCardIdx],
        });
        state = turnFlipNthIdxCard(state, thisCardIdx);
        return state;
      } else {
        //페어를 만든경우
        setFirstCard({});
        state = turnFlipNthIdxCard(state, thisCardIdx);
        return state;
      }
      alert('비상');
      return state;
    case ACTION_TYPE.PAUSE:
      return state;
    case ACTION_TYPE.UNLOCK:
      const idx1 = parseInt(action.payload.boardOption.idxes[0]);
      const idx2 = parseInt(action.payload.boardOption.idxes[1]);
      state = turnFlipNthIdxCard(state, idx1);
      state = turnFlipNthIdxCard(state, idx2);
      action.payload.setBoardOption({
        ...action.payload.boardOption,
        idxes: [],
        isLocked: false,
        isFlipBooked: false,
      });
      return state;
    default:
      return state;
  }
};

const cardSetting = ({ num, datas }) => {
  console.log('taken value num', num);
  console.log('taken value datas', datas);
  let tempArray = [];
  console.log('cardSetting start');
  const parsedNum = parseInt(num); //하프값
  console.log(parsedNum);
  if (datas == null) {
    return tempArray;
  }
  if (datas.length == 0) {
    alert(parsedNum);
    alert(datas);
    alert('datas.length이 0인상태!! 긴급 break;');
    return tempArray;
  }
  const newDeckCount = Math.floor(parsedNum / datas.length);
  console.log('필요한 새로운덱 :', newDeckCount);

  const rngDate = new Date();
  //newDeckCount가 0일 때는 작동하지 않음
  for (let i = 0; i < newDeckCount; i++) {
    for (let j = 0; j < datas.length; j++) {
      // 함수화 필요
      let tempInputValue = {
        ...datas[j],
        isDisabled: false,
        isFlipped: false,
      };
      tempInputValue.id = rngDate.getTime() + 3 * (j + i * newDeckCount);
      tempArray.push({ ...tempInputValue });
      tempInputValue.id = tempInputValue.id + 1;
      tempArray.push({ ...tempInputValue });
    }
  }

  const newCardCount = parsedNum % datas.length;
  for (let i = 0; i < newCardCount; i++) {
    // 함수화 필요
    let tempInputValue = { ...datas[i], isDisabled: false, isFlipped: false };
    tempInputValue.id = rngDate.getTime() + 3 * i;
    tempArray.push({ ...tempInputValue });
    tempInputValue.id = tempInputValue.id + 1;
    tempArray.push({ ...tempInputValue });
  }
  console.log('완성된 Array', tempArray);
  console.log(tempArray);
  return tempArray;
};

const BoardInGame = ({ num = 6, jsonPath = '/cardData.json' }) => {
  /** 뒤집을 두장 중 첫번째를 지칭하는 변수 */
  const [firstCard, setFirstCard] = useState({});

  /** 덱의 기본정보를 만들수 있는 datas */
  const [datas, setDatas] = useState([]);

  /** 배열안에는 객체들이 들어가고 객체에는 imagePath와name이 차례로 들어감 */
  const [cardsInBoard, setCardsInBoard] = useReducer(reducer, []);
  const [boardOption, setBoardOption] = useState({
    isLocked: false,
    isFlipBooked: false,
    idxes: [],
  });

  const fetchJsonData = async () => {
    console.log('fetch start');
    console.log(jsonPath);
    const response = await fetch(jsonPath);
    // console.log(response);
    const jsonData = await response.json();
    // console.log(jsonData);
    console.log('fetch End');
    setDatas(jsonData);
    console.log('fetch End2');
    return jsonData;
  };

  useEffect(() => {
    fetchJsonData().then((jsonData) => {
      setCardsInBoard({
        type: ACTION_TYPE.SETTING,
        payload: { num, datas: jsonData, setFirstCard },
      });
    });
  }, []);

  useEffect(() => {
    if (boardOption.isLocked) {
      const timeOutId = setTimeout(() => {
        setCardsInBoard({
          type: ACTION_TYPE.UNLOCK,
          payload: { boardOption, setBoardOption, setFirstCard }, //여기서부터 할차례
        });
      }, 1000);

      return () => clearTimeout(timeOutId);
    }
  });

  console.log('board rerendered!');

  return (
    <BoardOptionsContext.Provider value={{ boardOption, setBoardOption }}>
      <FirstCardContext.Provider value={firstCard}>
        <div className="Board">
          {cardsInBoard != null &&
            cardsInBoard.length > 0 &&
            cardsInBoard.map((data, idx) => (
              <CardInGame
                key={data.id}
                idx={idx}
                name={data.name}
                imagePath={data.imagePath}
                setFirstCard={setFirstCard}
                setCardsInBoard={setCardsInBoard} //dispatch
                isDisabled={data.isDisabled}
                isFlipped={data.isFlipped}
                ACTION_TYPE={ACTION_TYPE}
              />
            ))}
          {(cardsInBoard == null || cardsInBoard.length) <= 0 && <h1>????</h1>}
          {!(cardsInBoard != null && cardsInBoard.length > 0) &&
            datas != null &&
            datas.length > 0 && <h1>ERROR!!!</h1>}
          {console.log(datas, '!!!!!!!!!!!!!!!')}
        </div>
      </FirstCardContext.Provider>
    </BoardOptionsContext.Provider>
  );
};
export default BoardInGame;
