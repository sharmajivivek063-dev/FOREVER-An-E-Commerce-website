import React, { use, useEffect, useState, useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const {search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const location = useLocation();
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setVisible(true);
    }, []); // Initialize visibility to true

    useEffect(() => { // If the user navigates to the collection page, show the search bar Otherwise, hide it   
        if( location.pathname === "/collection" && location.state?.openSearch === true  ) {
            setVisible(true);
        } else {
            setVisible(false);    
        }
    },[location]);
    
    

    return showSearch && visible? (
    <div className='ml-15 mr-20 bg-gray-50 border-y border-gray-300 flex flex-row items-center justify-center gap-3 mb-2'>

        <div className='flex flex-row items-center gap-2 py-2 w-2/5 my-5 border border-gray-400 rounded-full px-6'>
            <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search' className='flex-1 rounded:sm outline-none bg-inherit text-md'/>
            <img className='w-3 sm:w-4' src={assets.search_icon} alt="" />
        </div>

        <img onClick={() => setShowSearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="" />

    </div>
  ) : null
}

export default SearchBar