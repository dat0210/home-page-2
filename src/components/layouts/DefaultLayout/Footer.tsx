import AboutUs from "../../AboutUs"
import Contact from "../../Contact"
import Customer from "../../Customer"
import Popular from "../../Popular"

const Footer = () => {
  return (
    <footer className="bg-[#222529] py-5 text-white">
       <div className="container mx-auto flex justify-between flex-wrap">
            <AboutUs tag="ABOUT US" logo="Electrician" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus. Duis nec vestibulum magna, et dapibus lacus." />
            <Contact tag="CONTACT INFO"/>
            <Customer tag="CUSTOMER SERVICE" />
            <Popular tag="POPULAR TAGS"/>
       </div>
    </footer>
  )
}

export default Footer