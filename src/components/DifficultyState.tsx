

export default function DifficultyState(props : {setState : (num : number) => void}) {
  return (
    <div className=" w-60 h-fit py-5 px-5 rounded-lg drop-shadow-lg bg-gray-50 z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center 7">
        <h1>Difficulty Setting</h1>
        <div className="w-full my-3 flex flex-row justify-evenly">
        <button className=" py-1 px-5 rounded-lg border bg-red-500 hover:bg-red-700 ease-in-out transition-colors" onClick={() => props.setState(1)}>Hard</button>
        <button className="  py-1 px-5 rounded-lg border bg-blue-500 hover:bg-blue-700 ease-in-out transition-colors" onClick={() => props.setState(2)}>Easy</button>

        </div>
        
        
    </div>
  )
}
