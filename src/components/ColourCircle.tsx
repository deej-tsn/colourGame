

export default function ColourCircle(props : {colour : string}) {
  return (
    <div className=" w-60 aspect-square rounded-full drop-shadow-lg" style={{backgroundColor: props.colour}}></div>
  )
}
