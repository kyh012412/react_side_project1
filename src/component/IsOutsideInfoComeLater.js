import { useState } from 'react';
import SubButton from './SubButton';


const IsOutsideInfoComeLater = ({name="카운터버튼"}) =>{
  /** 단순한 카운터 변수 하나 소환 */
  const [count,upCount] = useState(0);
  
  const doUpCount = () =>{
    alert('증가');
    upCount(count+1);
  }

  return (
    <>
      <button type='button' onClick={()=>{doUpCount()}}>{name+" : "+count}</button>
      <SubButton count={count} outfunction={doUpCount} />
    </>
  );
}

export default IsOutsideInfoComeLater;