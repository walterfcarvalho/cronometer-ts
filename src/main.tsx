import ReactDOM from 'react-dom/client'
import AppProvider from "./components/AppContext/AppProvider.tsx"
//import App from './Pages/App'
import TrainingList from './pages/TrainingList/index.tsx'
import {
  Routes, Route, BrowserRouter
} from "react-router-dom"


import './index.css'
import Training from "./pages/Workout/index.tsx"
import TrainingEdit from "./pages/TrainingEdit/index.tsx"
import Workout from "./pages/Workout/index.tsx"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TrainingList />} />
        <Route path="/trainingedit" element={<TrainingEdit />} />
        <Route path="/training" element={<Training />} />
        <Route path="/workout" element={<Workout />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
)
