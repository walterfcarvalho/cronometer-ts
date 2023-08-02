import React, {createContext, useState } from 'react';
import {treinos} from '../Const'

interface Props {
  children: React.ReactNode | undefined;
}

const myTasks: IAppData = { 
  tasks: treinos, 
  idxTask:0
}

export const AppContext = createContext<AppData | undefined>({
  appData: myTasks,
  setAppData: () => {}
});

const AppProvider = ({children}:Props) => {
  const [appData, setAppData] = useState<IAppData>(myTasks)

  return <AppContext.Provider value={{ appData: appData, setAppData: setAppData}}>
    {children}
  </AppContext.Provider>
}

export default AppProvider
