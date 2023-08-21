import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../../components/AppContext/AppProvider";
import Head from "../../components/Head";
import Footer from "../../components/Footer";
import TrainingItem from "../../components/TrainingItem";
import BtnAction from "../../components/BtnAction";
import { taskGroup } from '../../components/Const'
import {GrAddCircle} from 'react-icons/gr'

import './traininList.css'

const TrainingList = () => {
  const navigator = useNavigate()
  const { appData, setAppData } = useContext(AppContext)

  const trainingEdit = () => {    
    navigator({
      pathname: "/trainingedit"
    })
  }

  const trainingNew = () => {
    const newData = {...appData}
    newData.tasks.push({
      ...taskGroup, 
      label:"New training",
      key: (newData.tasks.length+1)
    })
    setAppData( newData )
  }

  const setIdx = (id: number) =>  setAppData({ ...appData, idxTask: id})

  const delTraining = (tsk:ITask) => {
    const newData = {...appData}

    newData.tasks = appData.tasks
    .filter( (t:ITask) => t.key === tsk.key)
  
    setAppData( newData )
  }
return <>
    <Head
      title={"My workouts"}
      goBack={false}
    />

    <div className="tl-list animate-left">
      {appData.tasks.map((task: ITask, id: number) =>

        <TrainingItem
          isOpen={true}
          onClick={ () => setIdx(id)} 
          tsk={task}    
          key={task.key}
          readOnly={true}
          buttons={ <>
            <BtnAction
              func={() => navigator("/workout")
            }
              task={null}
              title={"Run cronometer"}
            />  
            <BtnAction
              func={() => trainingEdit()}
              task={null}
              title={"Edit"}
            />  
            <BtnAction
              func={delTraining}
              task={task}
              title={"Del"}
            />  
          </> }
        >

        </TrainingItem>
      )}
    </div>

    <GrAddCircle 
      onClick={trainingNew} 
      className={"workouts-btn"}  
      size={'50px' } 
    />

    <Footer />
  </>
}

export default TrainingList