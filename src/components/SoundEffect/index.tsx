interface Props {
  condition:boolean
  fileName:string
}

const SoundEffect = ({condition, fileName}: Props) => {  
  return <>
    { condition  &&
      <audio autoPlay={true}>
        <source src={fileName} type="audio/mpeg"/>
      </audio>
    }
  </>
}
export default SoundEffect
