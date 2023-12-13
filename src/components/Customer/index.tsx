import { customer } from "../../data/customer"
import { Link } from "react-router-dom"

const Customer = ({tag}: {tag: string}) => {
  return (
    <div>
        <div  className="font-bold py-5">{tag}</div>
        <ul>
            {
                customer.map( (item) => {
                    return(
                        <li key={item.id} className="py-1 text-gray-500">
                            <Link to={item.url}>{item.name}</Link>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Customer