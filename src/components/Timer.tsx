import { useState, useEffect } from 'react';
import { TimerState } from '../types/Colour';



const Timer = (props: {initialMinute:number, initialSeconds:number, timerState : TimerState}) => {
    const [ minutes, setMinutes ] = useState(props.initialMinute);
    const [seconds, setSeconds ] =  useState(props.initialSeconds);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                    props.timerState.setTimerState(false);
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    }, []);

    return (
        <div>
        { minutes === 0 && seconds === 0
            ? null
            : <h1 className='p-2 bg-gray-50 rounded-lg drop-shadow-lg'>Timer left:  {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        }
        </div>
    )
}

export default Timer;