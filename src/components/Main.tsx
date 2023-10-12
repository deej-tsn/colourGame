import PickColours from './PickColours'
import ColourCircle from './ColourCircle'
import { Colour, Difficulty, TimerState } from '../types/Colour'
import DifficultyState from './DifficultyState';
import { distanceAway, randomColour } from '../util/colour';



export default function main(props : {red : Colour , green: Colour, blue:Colour, bgColour:string, chosenColour:string, timer: TimerState, timer2:number, difficulty: Difficulty, setColour : (colour :string) => void}) {

  let end;

  console.log(props.difficulty.difficulty);
  const distance = distanceAway(props.bgColour, props.chosenColour);

  if(props.timer.timerState){
    if (props.difficulty.difficulty == 1) {
      end = (
        <h1 className='w-30 bg-gray-50 rounded-xl p-2 drop-shadow-lg'>{`Time Left: ${props.timer2}`}</h1>
      )
    }else{
      end = (
        <div className=' w-full md:w-8/12 lg:w-6/1 flex flex-row justify-evenly'>
          <h1 className='w-42 bg-gray-50 rounded-xl p-2 drop-shadow-lg'>{`Distance Away: ${distance}`}</h1>
          <h1 className='w-30 bg-gray-50 rounded-xl p-2 drop-shadow-lg'>{`Time Left: ${props.timer2}`}</h1>
        </div>
        );
    }
    
  }

  else{
    end = (
      <div className=' w-full flex flex-row justify-evenly'>
        <h1 className='w-28 bg-gray-50 rounded-xl p-2 drop-shadow-lg'>{`Score: ${(100 - parseFloat(distance)).toFixed(2)}`}</h1>
        <button className='w-28 bg-gray-50 rounded-xl p-2 drop-shadow-lg' onClick={() => {
            props.timer.setTimerState(true);
            props.setColour(randomColour());
            props.red.setter("FF");
            props.blue.setter("FF");
            props.green.setter("FF");
          }
        }>Retry</button>
      </div>
      
    );

  }
  return (
    <div className='w-full h-full flex justify-center items-center relative' style={{backgroundColor : props.bgColour}}>
      <div className='w-full md:w-8/12 lg:w-6/12 flex flex-col items-center'>
        {props.difficulty.difficulty == 0 && <DifficultyState
          setState={props.difficulty.setDifficulty}
        />}

        {props.difficulty.difficulty != 0 &&
          <ColourCircle
              colour={props.chosenColour}
          />}
        {props.difficulty.difficulty != 0 && 
        
        <PickColours
            red = {props.red}
            blue= {props.blue}
            green= {props.green}
            timer={props.timer}
        />}
        
        {props.difficulty.difficulty != 0 && end}
      </div>
      
    </div>
  )
}
