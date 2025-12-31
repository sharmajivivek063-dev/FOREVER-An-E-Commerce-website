import React from 'react'
import { ShopContext } from '../context/ShopContext';
import { Link, PrefetchPageLinks } from 'react-router-dom';
import { useContext } from 'react';


const ProductItems = ({id,image,name,price}) => {
    // This component will display individual product items
    const {currency} = useContext(ShopContext);
  return (
    <Link to={`/product/${id}`} className='text-gray-700 hover:text-gray-800 cursor-pointer'>

        <div className='overflow-hidden'>
            <img className='hover:scale-110 ease-in-out ' src={image[0]} alt="" />
        </div>
        <p className='pt-3 pb-1 text-sm'> {name}</p>
        <p className='text-sm font-medium'> {currency}{price}</p>
    </Link>
  )
}

export default ProductItems