import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let today = new Date();
const curTime = today.getHours();
let salutation = '';

const cssStyle = { };

if(curTime >= 1 && curTime < 12){
  salutation = 'Good Morning';
  cssStyle.color = 'green';
}else if(curTime >=12 && curTime < 17){
  salutation = 'Good Afternoon';
  cssStyle.color = 'orange';
}else if(curTime >=17 && curTime < 21){
  salutation = 'Good Evening'; 
  cssStyle.color = 'yellow';
}else{
  salutation = 'Good Night';
  cssStyle.color = 'black';
}


ReactDOM.render(<><div><h1>hello sir!  <span style={cssStyle}> {salutation} </span> </h1>
</div>
  </>,
  document.getElementById("root")
);