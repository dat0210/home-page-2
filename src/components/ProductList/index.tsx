import React from 'react'
import axios from 'axios'

interface IProduct {
  id: number;
  title: string;
  price: number;
  images: string[]
}


const ProductList = ({title}: {title: string}) => {
    const [products, setProducts] = React.useState<IProduct[] | null>(null);
    
    React.useEffect(()=>{
        //Định nghĩa hàm
        const fetchData = async ()=>{
            //Gọi API với method GET
            try {
              const response = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=4');
              //Log ra để xem API nó trả cái gì 
              console.log(response);
               //Sau khi lấy được kết quản thì set State
              setProducts(response.data);
            
              //Lỗi nó nhảy vào phần catch
            } catch (error) {
              console.error(error);
            }
          
           
          }
          //Gọi Hàm
          fetchData();
      },[]);//Dependency là mảng rỗng thì chạy 1 lần duy nhất

      return(
        <div>
            <div className='font-bold text-4xl text-center py-10'>{title}</div>
            <div className='container mx-auto flex'>
            {
                products && products.length > 0 && products.map((product: IProduct) => {
                    return(
                        <div key={product.id}>
                            <div className='w-auto' >
                            <img src={product.images[0]} alt="" />
                            </div>
                            <div className='py-3'>
                                <strong className='text-[20px]'>{product.title}</strong> <br />
                                <strong className='text-red-500 text-[20px]'>{product.price}</strong>
                            </div>
                        </div>
                    )
                } )
            }
        </div>
        </div>
    )
    }
    
    

    

export default ProductList