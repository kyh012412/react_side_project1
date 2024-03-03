import { useEffect, useState } from 'react';
// import datas from '../data.json';
import mycss from '../css/my.css';

const Home = () => {
  const [datas, setDatas] = useState([]);

  const fetchData = async () => {
    const response = await fetch('/data.json');
    console.log(response);
    const jsonData = await response.json();
    console.log(jsonData);
    setDatas(jsonData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ul id="dataUl">
        {datas.map((data, idx) => (
          <li key={data.id}>
            <a href={data.link} target="_blank">
              <div>외부링크 : {data.title}</div>
            </a>
            <a href={data.mypage} target="_blank">
              <div>내부링크 : {data.title}</div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
