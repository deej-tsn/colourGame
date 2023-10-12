import { useEffect, useState } from 'react'
import './App.css'
import Main from './components/Main';
import usePersistantTimer from './util/ptime';
import { randomColour} from './util/colour';




export default function App() {


  const [chosenColour, setColour] = useState(randomColour());

  const [difficulty, setDifficultyState] = useState(0);

  const [redAmount, setRedAmount] = useState("FF");

  const [greenAmount, setGreenAmount] = useState("FF");

  const [blueAmount, setBlueAmount] = useState("FF");

  const [timerState , setTimerState] = useState(true);
  const [count,start, pause, reset] = usePersistantTimer(false,{updateFrequency:1});



  if(difficulty == 0){
    
  }
  if(timerState && difficulty != 0){
    start();
  } 

  useEffect(() => {
    document.title = "Colour Game";
  }, []);
  
  const countdown = (value : number, count : number) : number => {
    count = count/1000;
    if(count < value) return Math.round(value - count);
    else{
      reset()
      pause()
      setTimerState(false);
      return 0;
    } 
  }

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

      timer2 = {countdown(30, count)}
      timer={{
        timerState,
        setTimerState
      }}

      difficulty={{
        difficulty : difficulty,
        setDifficulty: setDifficultyState
      }}

      setColour = {setColour}
    />
  )
}


