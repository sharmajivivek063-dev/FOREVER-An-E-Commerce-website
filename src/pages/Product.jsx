import React, { useContext , useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import {assets} from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';


const Product = () => {

  const { productId } = useParams(); // Fetch product details using productId, This could be done using an API call or from a local data source

  // console.log("Product component rendered for product ID:", productId);

  const {products, currency} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  // function to fetch product data
  const fetchProductData = async () => {
    products.map( (item) => {
      if(item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        // console.log("Product data fetched:", item);
        return null; // to avoid returning anything from map
      }
    })
  }
  
  useEffect(() => {
    // Call the function to fetch product data when the component mounts
    fetchProductData();
  }, [productId, products]);
  

  return productData ? (
    <div className='border-t-2 pt-10 transistion-opacity ease-in duration-500 opacity-100'>

      {/* images and details */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'> 

        {/* product image */}
        <div className='flex-1 flex flex-col-l gap-3 sm:flex-row'>

          {/* for small images */}
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-[100%] sm:mb-3 flex-shrink-0 cursor-pointer' />
            ))};
          </div>

          {/* main image */}
          <div className='w-full sm:w-[70%]'>
            <img src={image} className='w-full h-auto ' />
          </div>
        </div>

        {/* product details */}
        <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex item-center gap-1 mt-2'>
                <img src={assets.star_icon} className='w-3'/>
                <img src={assets.star_icon} className='w-3'/>
                <img src={assets.star_icon} className='w-3'/>
                <img src={assets.star_icon} className='w-3'/>
                <img src={assets.star_dull_icon} className='w-3'/>
                <p className='pl-2'>(122)</p>
            </div>
            <p className='mt-2 text-3xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-2 text-gray-600 text-sm md:w-4/5'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                {productData.sizes.map((item,index) => (
                  <button onClick={() => setSize(item)} className={`border border-gray-100 px-4 py-2 cursor-pointer ${item===size ? "bg-gray-200 border-orange-600 text-orange-600 rounded" : ""}`} key={index}>{item}</button>
                ))}
              </div>
            </div>
            <button className='bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors duration-300 cursor-pointer'>Add to Cart</button>
            <hr className='mt-8 sm:w-4/5'/>
            <div className='mt-3 font-medium text-sm text-gray-600 sm:w-4/5'>
              <p>100% original Product</p>
              <p>Cash on Delivery available</p>
              <p>Return & Exchange available Within 7 days</p>
            </div>
        </div>
      </div>
      {/* --------------------------product description & Reviews-------------------------- */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews</p>          
        </div>
        <div className='flex flex-col gap-4 boarder px-6 py-6 text-sm text-gray-600'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit natus dolor nam sint perferendis architecto minima quis, harum eum odit! Fugiat odit aperiam minus consectetur veniam vel illo, quam qui?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta est deleniti dicta reprehenderit quibusdam ex, corrupti veritatis aperiam animi. Ducimus iusto omnis totam sapiente minima, voluptate dolorem laborum? Ipsa, sapiente.</p>
        </div>
      </div>

      {/* --------------------------Similar Products-------------------------- */}

      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : <div className='opacity-0'></div>
}

export default Product