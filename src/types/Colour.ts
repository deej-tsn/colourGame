export type Colour = {
    colour : string,
    setter : (colour:string ) => void
}

export type TimerState = {
    timerState : boolean
    setTimerState : (state:boolean) => void
}

export type Difficulty = {
    difficulty : number
    setDifficulty : (num : number ) => void
}