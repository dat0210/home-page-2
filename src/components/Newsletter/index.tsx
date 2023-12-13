import { useForm, SubmitHandler } from "react-hook-form"


interface IFormInput {
  Name: string
  Phone: number
  Email: string
}

interface INews {
  title: string,
  desc: string,
}

const Newsletter = ({title, desc}: INews) => {
  const { register, handleSubmit} = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
    <div className="bg-gray-200">
        <div className="container mx-auto  py-10">
          <div className="font-bold text-4xl text-center">{title}</div>
          <div className="py-5 text-center text-gray-500">{desc}</div>
          <div  className=" grid justify-items-center bg-orange-500">
            <form className=" my-5" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Your Name" className="m-5 p-1"  {...register("Name", { required: true, minLength: 4,  })} />
              
                <input placeholder="Your Mobile Phone" className="m-5 p-1" type="number"  {...register("Phone", { required: true  , minLength: 10, maxLength: 10, })} />
                
                <input placeholder="Your Email Address" className="m-5 p-1"  type="email" {...register("Email", { required: true, pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
                } })} />
                 
                <input className=" m-5 bg-black text-white font-bold p-1 hover:bg-white hover:text-orange-500" type="submit" value={'Subcribe email list'}/>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Newsletter