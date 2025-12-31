import React, { useEffect } from 'react'
import { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItems from './ProductItems';
import Titles from './Titles';

const RelatedProducts = ({category,subCategory}) => {
    const {products} = useContext(ShopContext); 
    const [related,setRelated] = useState([])
    console.log(category,subCategory);

    useEffect(() => {
        if(products.length > 0){
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter(item => item.category === category);
            productsCopy = productsCopy.filter(item => item.subCategory === subCategory);
            setRelated(productsCopy);
            console.log(related);
        }
    },[products,category,subCategory]);

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Titles tex1="Related" text2="Products" />
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 ml-15 mr-20'>
            {
                related.map((item, index) => (
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

export default RelatedProducts;