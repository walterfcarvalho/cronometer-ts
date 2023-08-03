import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../components/AppContext/AppProvider"
import Task from "../../components/Task"
import { interval, warmup, coolDown } from "../../components/Const"

const Workout = () => {
  const { appData } = useContext(AppContext)
  const [workout, setWorkout] = useState<IAppData | undefined>(undefined)
  const [start, setStart] = useState<boolean>(false)

  const resumePause = () => setStart(!start)

  useEffect ( () => {
    const aux:ITask[] = []
      
    interval.duration = appData.tasks[appData.idxTask].param.timeInterval
    
    warmup.duration = appData.tasks[appData.idxTask].param.timeWarmup
    
    aux.push(warmup)
    
    appData.tasks[appData.idxTask]
    .nodes.forEach( n1 => {
      for (let i = 0 ; i<= n1.loops-1; i++ ) {
        n1.nodes.forEach ( n2 => {
          for (let i2 = 0; i2<= n2.loops-1; i2++ ) {
            aux.push(n2);
            aux.push(interval);        
          }
        })         
        if ( n1.type === "t" ){
          aux.push(n1);
          aux.push(interval);
        }
      }
    })

    aux.pop()
    aux.push(coolDown)    
    setWorkout( { tasks: aux, idxTask:0} )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const prevStep = () => 

    setWorkout({ ...workout, idxTask: workout.idxTask >=1 
                ? --workout.idxTask
                : workout.idxTask})
                
  const nextStep = () => {
    setWorkout({
      ...workout, idxTask: workout.idxTask < workout.tasks.length - 1
        ? ++workout.idxTask
        : workout.idxTask
    })
  }

  return <div className="task-container">

    { workout &&
    
      workout.tasks.map((task: ITask, idx: number) =>

        idx === workout.idxTask &&

          <Task key={idx}
            prevStep={prevStep}
            nextStep={nextStep}
            task={task}
            autoStart={start}
            setAutoStart={resumePause}
          ></Task>
      )}
  </div>
}
export default Workout
