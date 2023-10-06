import { useState } from 'react'
import './App.css'
import {rgb2lab, deltaE} from 'rgb-lab';
import Main from './components/Main';




export default function App() {


  function randomColour(){
    const letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
  }

  function toRGBArray(colour : string){
    let r = parseInt(colour[1] + colour[2], 16);
    let g = parseInt(colour[3] + colour[4], 16);
    let b = parseInt(colour[5] + colour[6], 16);

    return [r,g,b];

  }

  function distanceAway() {
    const lab1 = rgb2lab(toRGBArray(bgColour));
    const lab2 = rgb2lab(toRGBArray(chosenColour));

    return deltaE(lab1, lab2).toFixed(2);

  }

  const [chosenColour] = useState(randomColour());

  

  const [redAmount, setRedAmount] = useState("00");

  const [greenAmount, setGreenAmount] = useState("00");

  const [blueAmount, setBlueAmount] = useState("00");

  if(redAmount.length == 1){
    setRedAmount("0"+redAmount);
  }

  if(blueAmount.length == 1){
    setBlueAmount("0"+blueAmount);
  }
  if(greenAmount.length == 1){
    setGreenAmount("0"+greenAmount);
  }

  const bgColour = `#${redAmount}${greenAmount}${blueAmount}`;


  return (
    <Main
      red = {{
        colour:redAmount,
        setter: setRedAmount
      }}
      blue={{ 
        colour :blueAmount, 
        setter :setBlueAmount
      }}
      green={{
        colour :greenAmount,
        setter: setGreenAmount
      }}
      bgColour={bgColour}
      chosenColour={chosenColour}

      distance={distanceAway()}
    />
  )
}


