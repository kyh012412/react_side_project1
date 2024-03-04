import { useState } from 'react';

const SubButton = ({count=0,outfunction}) =>{
  const[myValue,setMyValue] = new useState(count);

  const isOdd = ()=>{
    if(count%2==1){
      console.log("홀수 : "+count);
    }else{
      console.log("짝수 : "+count);
    }
    outfunction();
  }

  return(
    <button type='button' onClick={isOdd}>{"내값 : "+myValue+", count값 : "+count}</button>
  );
}

export default SubButton;