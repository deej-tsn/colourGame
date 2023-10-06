import PickColours from './PickColours'
import ColourCircle from './ColourCircle'
import { Colour, TimerState } from '../types/Colour'
import Timer from './Timer'



export default function main(props : {red : Colour , green: Colour, blue:Colour, bgColour:string, chosenColour:string, distance : string, timer: TimerState}) {

  let end;

  if(props.timer.timerState){
    end = (
    <div className=' w-full md:w-8/12 lg:w-6/1 flex flex-row justify-evenly'>
      <h1 className='w-28 bg-gray-50 rounded-xl p-2 drop-shadow-lg'>{`Distance Away: ${props.distance}`}</h1>
      <Timer
        initialMinute={0}
        initialSeconds={29}
        timerState={props.timer}
        />
    </div>
    );
  }

  else{
    end = (
      <h1 className='w-28 bg-gray-50 rounded-xl p-2 drop-shadow-lg'>{`Score: ${100 - parseFloat(props.distance)}`}</h1>
    );

  }
  return (
    <div className='w-full h-full flex justify-center items-center' style={{backgroundColor : props.bgColour}}>
      <div className='w-full md:w-8/12 lg:w-6/12 flex flex-col items-center'>
        <ColourCircle
            colour={props.chosenColour}
        />
        <PickColours
            red = {props.red}
            blue= {props.blue}
            green= {props.green}
            timer={props.timer}
        />
        {end}
        
        

      </div>
      
    </div>
  )
}
