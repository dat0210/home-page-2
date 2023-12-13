import { offer } from "../../data/offer"
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const Offer = ({title}: {title: string}) => {
  return (
    <div className="bg-gray-200">
        <div className="container mx-auto">
            <div className="font-bold text-4xl text-center py-10">{title}</div>
            <ul className="flex justify-between flex-wrap">
                {
                    offer.map( (item) => {
                        return(
                            <li key={item.id} className="bg-white my-5">
                                <img src={item.thumb} alt="" />
                                <div className="bg-white w-72 p-10 relative mt-[-30px]">
                                    <Link to={item.url} className="font-bold">{item.tag}</Link>
                                    <p className="text-gray-500">{item.desc}</p>
                                    <Link to={item.url} className="font-bold flex items-center w-fit hover:text-orange-500 duration-300">
                                        {item.etc} 
                                        < IoMdArrowDropright className='text-[24px] text-orange-500' />
                                     </Link>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default Offer