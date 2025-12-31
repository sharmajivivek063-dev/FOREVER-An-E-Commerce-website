import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex ml-15 mr-20 justify-evenly sm:grid-col-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
          
          <div>
            <img src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
          </div>

          <div>
            <p className='text-xl front-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
              <li>Home</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className='flex flex-col'>
            <p className='text-xl front-medium mb-5'>GET In TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
              <li>+1 234 567 890</li>
              <li>bigBrand@gmail.com</li>
            </ul>
          </div>
    
        </div>

        <div>
          <hr />
          <p className='py-5 text-sm text-center text-gray-600'>&copy; 2024 FrontedForever. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer