import { createContext } from 'react';
import {products} from '../assets/assets'
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext(); 

// ShopContextProvider used to provide the context for the whole app
// meaning of context provider is to provide the data to the whole app

const ShopContextProvider = (props) =>{

    const currency = "₹"; // Indian Rupee
    const delivery_fee = 10;
    const [search, setSearch] = useState(""); //search is the text that user types in the search bar
    const [showSearch, setShowSearch] = useState(false); // showSearch is a boolean that determines whether the search bar is visible or not

    const value = {
        products , currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;