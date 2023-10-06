import PickColours from './PickColours'
import ColourCircle from './ColourCircle'
import { Colour } from '../types/Colour'



export default function main(props : {red : Colour , green: Colour, blue:Colour, bgColour:string, chosenColour:string, distance : string}) {
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
        />

        <h1>{`${props.distance}`}</h1>

      </div>
      
    </div>
  )
}
