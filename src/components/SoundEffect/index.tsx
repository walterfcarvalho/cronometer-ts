interface Props {
  condition:boolean
  audio:string
}

const SoundEffect = ({condition, audio}: Props) => {  
  return <>
    { condition  &&
      <audio autoPlay={true}>
        <source src={audio} type="audio/mp3"/>
      </audio>
    }
  </>
}
export default SoundEffect
