import { IoIosCall } from "react-icons/io";

interface IService {
    tag: string,
    title: string,
    desc: string,
}

const Service = ({tag, title, desc}: IService) => {
    return(
            <div className="">
            <strong className="text-2xl text-orange-500 ">{tag}</strong> <br />
            <h1 className="text-4xl font-bold py-5">{title}</h1>
            <p className="text-gray-500">{desc}</p>
            </div>
    )
}

interface ICall {
    tag: string,
    title: string,
    desc: string,
    icon: React.ReactNode
}

const CallUs = ({tag, title, desc, icon}: ICall) => {
    return (
        <div>
            <strong>{tag}</strong> <br />
            <h2 className="text-2xl text-orange-500 font-bold flex items-center py-3">{icon} {title}</h2>
            <p className="text-gray-500">{desc}</p>
        </div>
    )
}

const OurService = () => {
  return (
    <div className="container mx-auto py-10 flex flex-wrap-reverse justify-between ">
        <img className="lg:w-auto md:w-full " src="/public/images/category1.png" alt="" />
        <div className="lg:w-1/2 md:w-full flex flex-col justify-around">
            <Service tag='Our Services' title='Responsive & Professional' desc='We go the extra mile on every project. The value we provide clients comes from our level of skill and performance, as well as our knowledge and professionalism. Rest assured, we put the same level of energy into every project we take on.'/>
            <CallUs tag="Call us today" icon={< IoIosCall/>} title="1900-111000" desc="We're available 24/7, 365 days a year."/>
        </div>
    </div>
  )
}

export default OurService