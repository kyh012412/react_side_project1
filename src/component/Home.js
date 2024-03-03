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
    setDatas(jsonData.studyList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {datas.length > 0 ? ( // Check if datas has items before rendering
        <DataToUlLi datas={datas} />
      ) : (
        <NoData datas={datas} />
      )}
    </>
  );
};

const DataToUlLi = ({ datas }) => {
  // console.log('그것');
  // console.log(datas);
  return (
    <ul id="dataUl">
      {datas.map((data, idx) => (
        <li key={data.id}>
          <a href={data.link} target="_blank">
            <div>외부링크 : {data.title}</div>
          </a>
          <a
            href={
              data.mypage != null && data.mypage != ''
                ? data.mypage
                : '/' + data.title
            }
            target="_blank"
          >
            <div>내부링크 : {data.title}</div>
          </a>
        </li>
      ))}
    </ul>
  );
};

const NoData = ({ datas }) => {
  // console.log('그것');
  // console.log(datas);
  return <h1>'data loading or unreachable status'</h1>;
};

export default Home;
