import React, { useEffect, useState } from 'react';
import CollapseButton from './CollapseButton';
import CollapseBody from './CollapseBody';

const CollapseSet = () => {
  const [datas, setDatas] = useState({});
  const [keys, setKeys] = useState([]);
  const [content, setContent] = useState('초기값');

  const fetchData = async () => {
    const response = await fetch('/json/testJsonData.json');
    console.log(response);
    const fetchedDatas = await response.json();
    setDatas(fetchedDatas);
    setKeys(Object.keys(fetchedDatas));
  };

  useEffect(() => {
    fetchData();
    console.log('CollapseSet rerendered!');
  }, []);
  return (
    <>
      {keys.length > 0 &&
        keys.map((key) => {
          return (
            <CollapseButton
              key={key}
              text={key}
              setContent={setContent}
              value={[...datas[key]]}
            />
          );
        })}
      {keys.length > 0 && <CollapseBody Content={content} />}
    </>
  );
};

export default CollapseSet;
