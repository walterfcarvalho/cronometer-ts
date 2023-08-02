import * as Io from 'react-icons/Io'
import { useNavigate } from "react-router-dom"
import './head.css'

interface Props {
  title: string
  goBack: boolean
}
const Head = ({ title, goBack }: Props) => {
  const navigator = useNavigate()

  return <>
    <nav className="app-nav">
      {goBack &&
        <Io.IoIosArrowBack
          size={'35px'}
          onClick={() => navigator(-1)}
        />
      }
      {title}
    </nav>
    <div></div>
  </>
}
export default Head