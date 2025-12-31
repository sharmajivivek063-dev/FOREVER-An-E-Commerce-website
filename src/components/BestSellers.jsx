import React from 'react'
import { ShopContext } from '../context/ShopContext';
import { useContext, useState, useEffect} from 'react';
import Titles from './Titles';
import ProductItems from './ProductItems';

const BestSellers = () => {
    // This component will display the best-selling products
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSellers] = useState([]);

    useEffect(() => {
        const bestProducts = products.filter((product)=> (product.bestseller === true));
        setBestSellers(bestProducts.slice(0, 6)); // Assuming we want the top 5 best sellers
    }, []);
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Titles tex1={"Best"} text2={"Sellers"} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Discover our best-selling products that our customers love the most.</p>  
        </div>

        {/* Displaying the best-selling products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 ml-15 mr-20'>
            {
                bestSeller.map((item, index) => (
                    <ProductItems
                        key={index}
                        id={item._id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                    />
                ))
            }

        </div>
    </div>
  )
  
}

export default BestSellers ;