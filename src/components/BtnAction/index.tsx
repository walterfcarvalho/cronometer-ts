const BtnAction = (props:IBtnProps) => {
  return <>
      <button
        onClick={ () => props.func(props.task) }
      >
        {props.title}
      </button>
  </>
}
export default BtnAction
