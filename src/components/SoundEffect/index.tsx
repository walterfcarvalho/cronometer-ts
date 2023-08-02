import { useEffect } from "react"

interface Props {
  audio:string
}

const SoundEffect = ({audio}: Props) => {
  
  useEffect ( () => {
    const myAudio = new Audio(audio)
    myAudio.play()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>
  </>
}

export default SoundEffect
