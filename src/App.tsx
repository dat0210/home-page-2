import {BrowserRouter, Routes, Route} from 'react-router-dom'

import HomePage from "./pages/HomePage"
import BlogPage from './pages/BlogPage'
import CategoryPage from './pages/CategoryPage'
import DefaultLayout from './components/layouts/DefaultLayout'
import NoPage from './pages/NoPage'
import LoginPage from './pages/LoginPage'
import ProductPage from './pages/ProductPage'
import CustomerPage from './pages/CustomerPage'



function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultLayout/>}>
          <Route index element={<HomePage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/category' element={<CategoryPage />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/customer' element={<CustomerPage />} />
        </Route>
          <Route path='*' element={<NoPage />} />
          <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
