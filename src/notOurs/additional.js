let body = document.getElementsByTagName('body')[0];
body.style.display = 'block';

// let header = document.getElementsByTagName('header')[0];
// let headerButtons = [];

// function reset() {
//   alert('reset pressed');
// }

// async function addCard() {
//   alert('addCard pressed');
//   //
// }

// async function hint() {
//   alert('hint pressed');
//   //
// }

// async function start() {
//   let buttonsInfo = await fetch('./myConfig.json');
//   let buttonsInfoJSON = await buttonsInfo.json();
//   let buttonsInfoArray = buttonsInfoJSON.slice(0, buttonsInfoJSON.length);

//   buttonsInfoArray.forEach((info, idx) => {
//     let tempBtn = document.createElement('button');
//     tempBtn.innerText = info.buttonText;
//     tempBtn.value = info.value;

//     tempBtn.addEventListener('click', () => {
//       if (info.value === 'reset') {
//         reset();
//       } else if (info.value === 'addCard') {
//         addCard();
//       } else if (info.value === 'hint') {
//         hint();
//       }
//     });

//     headerButtons[idx] = tempBtn;
//   });

//   header.append(...headerButtons);
// }

// start();

/*
// const init_bfn_clicked = () =>{
//     let board = document.getElementsByTagName('section')[0];
//     let val = document.getElementById('want_cols').value;
//     console.log(val); 
//     let s = "";
//     for(let i=0;i<val;i++)
//     s+="1fr ";
//     board.style.gridTemplateColumns = s;
// }

// let init_btn = document.getElementById('init_btn');
// console.log(init_btn);
// init_btn.addEventListener("click",init_bfn_clicked);
*/
