import Navigation from "../../Navigation"
import { Link } from "react-router-dom"


const Header = ({logo}: {logo: string}) => {
  return (
    <header className="bg-orange-500 text-white py-5">
        <div className="container mx-auto">
            <div className="flex justify-between items-center flex-wrap">
                <Link to='/' className="font-bold text-3xl">{logo}</Link>
                <Navigation />
            </div>
            
        </div>
    </header>
  )
}

export default Header