import { useTimer } from 'react-timer-hook';
import * as Bs from 'react-icons/bs';

import SoundEffect from "../SoundEffect";
import ProgressBar from "./ProgressBar";
import './Task.css'

interface Props {
  task: ITask,
  nextTask?:ITask
  prevStep: () => void
  nextStep: () => void
  autoStart: boolean
  setAutoStart: () => void
}

const mmSsToSecond = (mmss: string) => {
  const aScs = mmss.split(":")
  return (+aScs[0] * 60) + (+aScs[1])
}

const getExpiryTime = (mmss: string) => {
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + mmSsToSecond(mmss));
  return expiryTimestamp
}

const Task = ({ task, nextTask, prevStep, nextStep, autoStart, setAutoStart }: Props) => {

  const expiryTimestamp: Date = getExpiryTime(task.duration)

  const onExpire = () =>{
    if (task.type === 't') {
      setTimeout( () => nextStep(), 1600)
    } else
      nextStep()
  }

  const {
    seconds, minutes, hours, days, isRunning, start, pause, resume, restart
  } = useTimer({ expiryTimestamp, onExpire: onExpire , autoStart: autoStart });

  const addTime = (mmss: string) => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + days
      + (hours * 3600) + (minutes * 60) + seconds + mmSsToSecond(mmss));
    restart(time)
  }

  const toogleRun = () => {
    isRunning ? pause() : resume()
    setAutoStart()
  }

  const formatDate = () => {
    start
    const mm: string = minutes.toString().length < 2 ? '0'.concat(minutes.toString()) : minutes.toString()
    const ss: string = seconds.toString().length < 2 ? '0'.concat(seconds.toString()) : seconds.toString()
    return `${mm}:${ss}`
  }

  return <div className={`task-container bg-${task.type}`}>
    <SoundEffect
      condition={(minutes === 0 && seconds <= 5 && task.type === 'i')}
      fileName={'/Sounds/prepare.mp3'}
    />

    <SoundEffect
      condition={(task.type === 't' && isRunning)}
      fileName={'/Sounds/roundStart.mp3'}
    />

    <SoundEffect
      condition={(minutes === 0 && seconds <= 5 && task.type === 't')}
      fileName={'/Sounds/fiveSeconds.mp3'}
    />

    <SoundEffect
      condition={minutes === 0 && seconds === 0 && task.type === 't'}
      fileName={'/Sounds/roundEnd.mp3'}
    />

    <span className="task-name">
      {`${task.label}`}
    </span>

    { nextTask &&
      <span className="task-name">
        {`${nextTask.label}`}
      </span>
    }

    <ProgressBar
      min={minutes}
      sec={seconds}
      duration={mmSsToSecond(task.duration)}
    >
      <span className="task-time">
        {formatDate()}
      </span>
    </ ProgressBar>

    <div className={`task-play-controls`}>
      {isRunning &&
        <Bs.BsFillPauseFill
          className="task-play-controls-btn"
          alt={`Pause timer`}
          onClick={toogleRun}
        />
      }

      {!isRunning &&
        <Bs.BsPlayFill
          className="task-play-controls-btn"
          alt={`Resume timer`}
          onClick={toogleRun}
        />
      }

      {<Bs.BsArrowCounterclockwise
        className="task-play-controls-btn"
        alt={`Resume timer`}
        onClick={() => restart(getExpiryTime(task.duration))}
      />}

      <button
        // className="task-play-controls-btn"
        onClick={() => addTime('00:10')}
      >
        +10
      </button>
      <button
        // className="task-play-controls-btn"
        onClick={() => addTime('00:30')}
      >
        +30
      </button>
    </div>

    <div className="task-play-controls-prev-next">
      <Bs.BsFillSkipBackwardFill
        className="task-play-controls-prev-next-btn"
        onClick={() => prevStep()}
      />

      <Bs.BsFillSkipForwardFill
        className="task-play-controls-prev-next-btn"
        onClick={() => nextStep()}
      />
    </div>
  </div>
}
export default Task;