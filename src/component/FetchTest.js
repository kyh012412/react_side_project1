import { useEffect, useState } from 'react';

const FetchTest = () => {
  const [dataArray, setDataArray] = useState([]);
  const [dataObject, setDataObject] = useState({});

  const fetch_url_array = '/json/testArray.json';
  const fetch_url_object = '/json/testObject.json';

  const fetchDataArray = async () => {
    try {
      const response = await fetch(fetch_url_array);
      const jsonData = await response.json();
      setDataArray([...dataArray, ...jsonData]);
    } catch (error) {
      console.error('데이터 불러오기 실패 (배열):', error);
    }
  };

  const fetchDataObject = async () => {
    try {
      const response = await fetch(fetch_url_object);
      const jsonData = await response.json();
      setDataObject(jsonData); // 전체 객체 사용      
      console.log('그값');
      console.log(jsonData);
    } catch (error) {
      console.error('데이터 불러오기 실패 (객체):', error);
    }
  };

  useEffect(() => {
    fetchDataArray();
    fetchDataObject(); // 객체 데이터도 불러오려면 주석 해제
  }, []);

  return (
    <>
      {/* <div>
        <h2>배열 데이터</h2>
        {dataArray.map((data, idx) => (
          <h1>{data.id}</h1>
        ))}
      </div> */}

      <hr />

      <div>
        <h2>객체 데이터</h2>
        {Object.keys(dataObject).map((key) => (
          <h1 key={key}>{dataObject[key].forEach((data)=>(
            <h3>{data.id}</h3>
          ))}
          </h1>
        ))}
      </div>
    </>
  );
};

export default FetchTest;

// import { useEffect, useState } from 'react';

// const FetchTest = () =>{
//   const [dataArray, setDataArray] = useState([]);
//   const [dataObject, setDataObject] = useState({});


//   //[]형인 json
//   const fetch_url_array = '/json/testArray.json';
//   //{}인 json
//   const fetch_url_object = '/json/testObject.json';

//   const fetchDataArray = async () => {
//     const response = await fetch(fetch_url_array);
//     const jsonData = await response.json();
//     console.log('그값');
//     console.log(jsonData);
//     setDataArray([...dataArray,...jsonData]);
//   }

//   const fetchDataObject = async () => {
//     const response = await fetch(fetch_url_object);
//     const jsonData = await response.json();
//     console.log(jsonData);
//     setDataObject({...dataObject,jsonData});
//   }

//   useEffect(()=>{
//     fetchDataArray();
//     // fetchDataObject();
//   })

//   return(<>
//     <div>Array
//       {dataArray.map((data,idx)=>(
//         <h1 key={data.id}>{data}</h1>
//       ))}
//     </div>

//     <hr/>
//     <hr/>
//     <hr/>

//     {/* <div>Object
//       {dataObject.map((data,idx)=>(
//         <h1>{data}</h1>
//       ))}
//     </div> */}

//   </>);

// };

// export default FetchTest;