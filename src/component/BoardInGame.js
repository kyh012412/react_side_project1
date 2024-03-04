import { useEffect, useState } from 'react';
import CardInGame from './CardInGame';

const BoardInGame = ({num=2,jsonPath="/cardData.json"}) =>{
  const [firstCard,setFirstCard] = useState();

  const [datas, setDatas] = useState([]);

  const fetchJsonData = async () => {
    const response = await fetch(jsonPath);
    // console.log(response);
    const jsonData = await response.json();
    // console.log(jsonData);
    setDatas(jsonData);
  };

  useEffect(() => {
    fetchJsonData();
  }, []);

  return (
    <div className='Board'>
      {datas.map((data,idx)=>(
        <CardInGame name={data.name} imagePath={data.imagePath} firstCard={firstCard} setFirstCard={setFirstCard}/>
      ))}
    </div>
  );
}
export default BoardInGame;