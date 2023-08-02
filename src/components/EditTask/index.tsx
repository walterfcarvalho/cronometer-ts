
// https://react-hook-form.com/get-started#Handleerrors


import { useForm } from "react-hook-form"
import './Formulario.css'

interface Props {
  tsk:ITask
}

const EditTask = ({tsk}:Props) => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<ITask>()

  const onSubmit = (data:ITask) => {
    console.log(tsk)
    console.log(data)

  } 

  console.log(watch())

  return <div className='formContainer'>
    <form onSubmit={handleSubmit(onSubmit)} >

      <p>
        <label htmlFor="firstName">field required, max length</label>
        <input
          placeholder="Task name"
          {...register('label', {
            required: 'this is a required',
            minLength: {
              value: 200,
              message: 'Max length is 2',
            },
          })}
        />
        {errors.label  && errors.label.message}
        <br />
      </p>

      {/* <p>
        <label htmlFor="range">age</label>
        <input
          placeholder="18"
          {...register('repetitions', {

            required: 'age is required',
            min: {
              value: 18,
              message: 'min age is 18',
            },
            max: {
              value: 99,
              message: 'max age is 99',
            }
          })}
        />
        {errors.label  && errors.repetitions .message}
        <br />
      </p> */}

      {/* <p>
        <select {...register("gender", { required: 'choose a gender' })}>
          <option value=""></option>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        {errors.gender && errors.gender.message}
        <br />
      </p> 


      <p>
        <label htmlFor="cpf">cpf</label>
        <input {...register("", { required: 'informe o cpf',
          pattern: { value: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, message: "nao é cpf" }
          
        })} />

        {errors.cpf && errors.cpf.message}
        <br />
      </p>

      */}

      <input type="submit" value={"go"} />


    </form>
  </div>
}

export default EditTask
