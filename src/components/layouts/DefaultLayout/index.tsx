
import Footer from "./Footer"
import Header from "./Header"
import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
  return (
    <> 
        <Header logo="Electrician" />
        <main className="">
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default DefaultLayout