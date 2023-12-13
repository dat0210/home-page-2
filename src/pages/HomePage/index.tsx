import Newsletter from '../../components/Newsletter'
import Offer from '../../components/Offer'
import OurService from '../../components/OurService'
import ProductList from '../../components/ProductList'
import Slide from '../../components/Slide'

const HomePage = () => {
  return (
        <>
            <Slide />
            <OurService />
            <Offer title='What We Offer'/>
            <ProductList title='Danh sach san pham' />
            <Newsletter title='Subscribe to Our Newsletter' desc='Do not want to miss news, updates, note and any offer on our products, then please subscriber to our mailling list.' />
        </>
  )
}

export default HomePage