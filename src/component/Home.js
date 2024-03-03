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
      {datas.length > 0 ? ( // Check if datas has items before rendering
        <ul id="dataUl">
          {datas[0].studyList.map((data, idx) => (
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
      ) : (
        'data loading or unreachable status'
      )}
    </>
  );
};

export default Home;
