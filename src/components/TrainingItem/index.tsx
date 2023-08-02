import { ChangeEvent, useContext } from "react"
import { AppContext } from "../AppContext/AppProvider"
import './trainingItem.css'

interface Props {
  tsk?: ITask
  cssClass?: string
  buttons?: React.ReactNode
  children?: React.ReactNode
  readOnly?:boolean
  onClick?: () => void
}

const TrainingItem = ({ tsk, children, buttons, readOnly, onClick}: Props) => {
  const { appData, setAppData } = useContext(AppContext)
  const id = appData.idxTask

  const updData = (field:string, value:string) => {
    const newData = {...appData}

    if (newData.tasks[id].key === tsk.key) {
      newData.tasks[id] = {...tsk, [field]: value }
    }

    newData.tasks[id].nodes = newData.tasks[id].nodes.map( n1 => {
      if ( n1.key === tsk.key) {
        return {...n1, [field]:value }
      } else {
        n1.nodes = n1.nodes.map( n2 => {
          return n2 === tsk ?  {...n2, [field]:value} : n2} )
       return n1
      }
    }) 

    setAppData(newData)
  }

  return <>
    <details
      onClick={onClick}
    >
      <summary className={ tsk.type == "p" ? "tn-group": "tn-item"} 
      >
        { !readOnly 
          ? <input 
              className="tr-item-label"
              type="text" 
              pattern="^\d{2}:\d{2}$"
              value={ tsk.label} 
              onChange={ (e: ChangeEvent<HTMLInputElement>) => updData('label', e.target.value) }
            />
          : <span className="tr-item-label">
              {`${tsk.label}  ${tsk.type} `}
            </span>
        }  


        <div className="item-details">
            <div className="item-details-data" >
              { tsk.loops !== undefined  &&
                <>
                  <span>Loops</span>
                  <input 
                    type="number"
                    min={1}
                    max={9}
                    value={tsk.loops} 
                    onChange={ (e: ChangeEvent<HTMLInputElement>) => updData('loops', e.target.value) }
                  />
                </>
              }

              { tsk.duration !== undefined &&
                <>
                  <span>Duration</span>
                  <input 
                    type="text" 
                    min={"00:00"}
                    pattern="^\d{2}:\d{2}$"
                    value={ tsk.duration} 
                    onChange={ (e: ChangeEvent<HTMLInputElement>) => updData('duration', e.target.value) }
                    />
                </>
              }
            </div>

          <div className="item-details-btn">
            {buttons}
          </div>
        </div>        


      </summary>

      <div>
        {children}
      </div>
    </details>
  </>
}
export default TrainingItem
