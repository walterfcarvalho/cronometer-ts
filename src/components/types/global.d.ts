export {};

declare global {
  
  interface ITask {
    label:string | null
    labelEdit?: boolean 
    key:number | null
    duration?: string | null
    type?: string
    idTask?: number
    loops?: number
    nodes?: ITask[]
    param?: ITaskParam
  }

  interface ITaskParam {
    timeWarmup: string;
    timeInterval: string;
  }

  interface IAppData {
    tasks: ITask[] | null
    idxTask: number | null
  }

  interface AppData  {
    appData: IAppData|null,
    setAppData: Dispatch<SetStateAction<IAppData>>;
  }

  interface IBtnAct {
    addCircuit?: (tsk:ITask) => void | undefined
    addCircuit?: (tsk:ITask) => void | undefined
    editTask?: (tsk:ITask) => void | undefined
    delTask?: (tsk:ITask) => void | undefined
  }

  interface IBtnProps {
    title?:string
    func?: (tsk:ITask | number) => void
    task: ITask | number
  }




}
