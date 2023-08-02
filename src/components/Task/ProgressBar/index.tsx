import { ReactNode, useEffect } from "react"
import './progressBar.css'

interface Props {
  duration:number
  min:number
  sec:number
  children: ReactNode;
}

const ProgressBar = ({duration, min, sec, children}: Props) => {

  useEffect( () => { 
    const percentLeft = ((min * 60) + sec) * 100 / duration 
    document.getElementById("pie")?.style.setProperty('--p', `${percentLeft}` );
  }, [duration, min, sec])

  return <div id="pie" className="pie animate no-round">
    {children}
  </div>
}

export default ProgressBar