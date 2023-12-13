import { popular } from "../../data/popular"
import { Link } from "react-router-dom"

const Popular = ({tag}: {tag: string}) => {
  return (
    <div className="lg:w-1/5 md:w-1/2">
        <div className="font-bold py-5">{tag}</div>
        <div className="flex flex-row flex-wrap">
            {
                popular.map( (item) => {
                    return(
                        <Link className=" border border-gray-500 text-gray-500 w-fit m-1 p-1" key={item.id} to={item.url}>{item.name}</Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Popular