import { Colour } from "../types/Colour";


export default function PickColours(props : {red : Colour , green: Colour, blue:Colour}) {

    const redValue = parseInt(props.red.colour,16);
    const greenValue = parseInt(props.green.colour,16);
    const blueValue = parseInt(props.blue.colour,16);

    

    const setNewColour = (event : any, colour : number) => {
        const value = parseInt(event.target.value);
        if(colour == 0){
            props.red.setter(value.toString(16));
        }else if (colour == 1) {
            props.green.setter(value.toString(16))
        } else{
            props.blue.setter(value.toString(16))
        }
        
    }

  return (
        <form className="w-full h-fit flex flex-col md:flex-row   p-5 justify-evenly">
            <div className="flex flex-col my-5">
                <label className=" text-center">red : {redValue}</label>
                <input id="red" type="range" min="0" max="255" defaultValue={redValue} onChange={(event) => setNewColour(event,0)}/>
            </div>

            <div className="flex flex-col my-5">
                <label className=" text-center">green: {greenValue}</label>
                <input id="green" type="range" min="1" max="255" defaultValue={greenValue} onChange={(event) => setNewColour(event,1)}/>

            </div>

            <div className="flex flex-col my-5">
                <label className=" text-center">blue : {blueValue}</label>
                <input id="blue" type="range" min="1" max="255" defaultValue={blueValue} onChange={(event) => setNewColour(event,2)}/>

            </div>
        </form>
  )
}
