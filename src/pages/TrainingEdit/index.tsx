import { useContext } from 'react'
import { AppContext } from '../../components/AppContext/AppProvider'
import Head from "../../components/Head"
import Footer from "../../components/Footer"
import BtnAction from "../../components/BtnAction"
import TrainingItem from '../../components/TrainingItem'
import { taskGroup, taskItem } from '../../components/Const'
import { nextKey } from "../../utils/nextKey"


const TrainingEdit = () => {
  const { appData, setAppData } = useContext(AppContext)
  const id = appData.idxTask

  const addTask = (task: ITask) => {
    const newSet = { ...appData }
    newSet.tasks[appData.idxTask].nodes.push({ ...task, key: nextKey(newSet.tasks[id]) })
    setAppData(newSet)
  }
  
  const delTask = (tsk:ITask) => {
    const newSet = { ...appData }
    newSet.tasks[id].nodes = newSet.tasks[id].nodes
    .filter( n1 => {
      n1.nodes = n1.nodes.filter ( n2 => n2.key !== tsk.key )
      return n1.key !== tsk.key
    })
    setAppData(newSet)
  }

  const addSubTask = (tsk:ITask) => {
    const idx = appData.tasks[id].nodes.indexOf(tsk)
    const newSet = { ...appData }
    newSet.tasks[id].nodes[idx].nodes.push({...taskItem, key: nextKey(newSet.tasks[id]) })
    setAppData(newSet)
  }

  return <>
    <Head
      title="Edit workout"
      goBack={true}
    />

    <div className="animate-right">
      <TrainingItem
        key={appData.tasks[id].key}
        tsk={appData.tasks[id]}
        readOnly={false}
        buttons={<>
          <BtnAction
            func={addTask} task={taskGroup} title={"+Group"}
          />
          <BtnAction
            func={addTask} task={taskItem} title={"+Item"}
          />
        </>}
      >
        {appData.tasks[id].nodes.map((n1: ITask) =>
          n1.type === 'g' ?
            <TrainingItem
              key={n1.key}
              tsk={n1}
              buttons={<>
                <BtnAction
                  func={addSubTask} task={n1} title={"+Item"}
                />
                <BtnAction
                  func={delTask} task={n1} title={"Del"}
                  />
              </>}
            >
              {n1.nodes.map((n2: ITask) =>
                <TrainingItem
                  key={n2.key}
                  tsk={n2}
                  buttons={<>
                    <BtnAction
                      func={delTask} task={n2} title={"Del"}
                    />
                  </>}
                >
                </TrainingItem>
              )}
            </TrainingItem>
            :
            <TrainingItem
              key={n1.key}
              tsk={n1}
              buttons={<>
                  <BtnAction
                    func={delTask} task={n1} title={"Del"}
                  />
              </>}
            >
            </TrainingItem>
        )}
      </TrainingItem>
    </div>
    <Footer />
  </>
}
export default TrainingEdit
