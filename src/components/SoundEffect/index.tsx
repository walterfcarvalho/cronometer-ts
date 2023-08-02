interface Props {
  audio:string
}

const SoundEffect = ({audio}: Props) => {
  
  // useEffect ( () => {
  //   const myAudio = new Audio(audio)
  //   myAudio.play()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return <audio autoPlay={true}>
    <source src={audio} type="audio/wav"/>
  </audio>
}

export default SoundEffect
