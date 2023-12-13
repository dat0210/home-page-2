import { navigation } from "../../data/navigation"
import { ImCart } from "react-icons/im";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
        <ul className="flex items-center gap-x-5">
            {
                navigation.map( (item) => {
                    return(
                        <li key={item.id} className="group relative">
                            <Link to={item.url} className="font-bold hover:text-slate-900 duration-300">{item.name}</Link>
                            {item.childs && item.childs.length > 0 ? (
                                <div className="sub_child hidden group-hover:flex flex-col absolute z-10 text-slate-900 bg-white p-3 w-36">
                                    {
                                        item.childs.map( (child) => {
                                            return <Link key={child.id} to={child.url}>{child.name}</Link>
                                        })
                                    }
                                </div>
                            ) : null }
                        </li>
                    )
                })
            }
            <li className="group relative"> <ImCart /> </li>
        </ul>
    </nav>
  )
}

export default Navigation