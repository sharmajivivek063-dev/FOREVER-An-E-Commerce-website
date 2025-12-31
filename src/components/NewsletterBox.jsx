import React from 'react'

const NewsletterBox = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission logic here
        alert('Thank you for subscribing!');
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-semibold text-gray-800'>Subscribe Now & get flat 50% off</p>
        <form onSubmit={handleSubmit} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-300 p-4 rounded'>
            <input type="email" placeholder='Enter Your Email' className='w-full sm:flex-1 outline-none' />
            <button type='submit' className='bg-black text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsletterBox