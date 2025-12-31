import React, {useContext, useEffect, useState } from 'react';
import Titles from '../components/Titles';
import ProductItems from '../components/ProductItems';
import { ShopContext } from '../context/ShopContext';

const Collection = () => {
  const { products ,search , showSearch} = useContext(ShopContext);

  const [showFilters, setShowFilters] = useState(false); // State to toggle filter visibility if true then show filters (for small screens)

  const [filteredProducts, setFilteredProducts] = useState([]); // This state will hold the filtered products based on search, category, and subcategory

  const [Category, setCategory] = useState([]); // This state will hold the selected categories

  const [Subcategory, setSubcategory] = useState([]); // This state will hold the selected subcategories

  // This function updates the category state to include or exclude the selected category
  const toggleCategory = (e) => {
    if(Category.includes(e.target.value)) {
      setCategory( prev =>prev.filter(item => item !== e.target.value));
    } else {
      setCategory([...Category, e.target.value]);
    }
  };

  const toggleSubcategory = (e) => {
    if(Subcategory.includes(e.target.value)) {
      setSubcategory( prev =>prev.filter(item => item !== e.target.value));
    } else {
      setSubcategory([...Subcategory, e.target.value]);
    }
  };

  // console.log("Search:", search);


  const ApplyFilters = () => { //on change of category or subcategory + every time page loads
    let ProductsCopy = products.slice();

    if(showSearch && search){ // If search is active, filter products based on search term
      const searchTerm = search.toLowerCase();
      ProductsCopy = ProductsCopy.filter(item => item.name.toLowerCase().includes(searchTerm));
    }

    if(Category.length > 0) {
      ProductsCopy = ProductsCopy.filter( item => Category.includes(item.category));
    }

    if(Subcategory.length > 0) {
      ProductsCopy =  ProductsCopy.filter( item => Subcategory.includes(item.subCategory));
    }
    
    setFilteredProducts(ProductsCopy);
  }
  
  const sortProducts = (e) =>{ // Price -> low to high || high to low

    let ProductsCopy = filteredProducts.slice();

    switch (e.target.value) {
      case 'low-to-high':
        setFilteredProducts(ProductsCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-to-low':
        setFilteredProducts(ProductsCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        setFilteredProducts(ProductsCopy); // Default case, no sorting
    }
  }
  

useEffect(() => {
  ApplyFilters();
}, [Category, Subcategory, search, showSearch,products]);

  return (
    <div className="flex flex-col text-xl gap-4 p-4 sm:flex-row">

      {/* Left Column Filter section */}
      <div className="mt-15 flex flex-col">

        {/* Filter toggle button - visible only on small screens */}
        <p
          className="cursor-pointer hover:text-gray-800 hover:border border-gray-400 rounded text-xl sm:hidden"
          onClick={() => setShowFilters(!showFilters)}
        >
          Filters
        </p>

        {/* Filters container */}
        <div className={`${showFilters ? 'block' : 'hidden'} sm:block flex flex-col gap-2`}>
          
          {/* Category */}
          <div className="flex flex-col gap-2 border border-gray-300 p-4 pr-30 pb-4 mb-4 mt-4 text-sm">
            <p>Category</p>
            <div className="flex flex-col gap-2">
              <label className="cursor-pointer">
                <input type="checkbox" className="mr-2" value="Men" onChange={toggleCategory}/>
                Men
              </label>
              <label className="cursor-pointer">
                <input type="checkbox" className="mr-2" value="Women" onChange={toggleCategory}/>
                Women
              </label>
              <label className="cursor-pointer">
                <input type="checkbox" className="mr-2" value="Kids" onChange={toggleCategory}/>
                Kids
              </label>
            </div>
          </div>

          {/* Subcategory */}
          <div className="flex flex-col gap-2 border border-gray-300 p-4 pr-30 pb-4 mb-4 mt-4 text-sm">
            <p>Category</p>
            <div className="flex flex-col gap-2">
              <label className="cursor-pointer flex flex-row">
                <input type="checkbox" className="mr-2" value="Topwear" onChange={toggleSubcategory}/>
                Topwear
              </label>
              <label className="cursor-pointer flex flex-row">
                <input type="checkbox" className="mr-2" value="Bottomwear" onChange={toggleSubcategory}/>
                Bottomwear
              </label>
              <label className="cursor-pointer flex flex-row">
                <input type="checkbox" className="mr-2" value="Winterwear" onChange={toggleSubcategory}/>
                Winterwear
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Collection and all products */}
      <div className="flex flex-col ml-4 w-full">

        {/* Title and Sort By Section */}
        <div className="flex flex-row gap-4 mb-4 mt-15 w-full justify-between">
          <Titles tex1="All" text2="Collection" />
          <select onChange={sortProducts} name="Sort by: Relevant" className="border border-gray-300 p-2 rounded-md text-sm hover:cursor-pointer">
            <option value="relevant" className= "hover:cursor-pointer" >Sort by: Relevant</option>
            <option value="low-to-high" className="hover:cursor-pointer">Price: Low to High</option>
            <option value="high-to-low" className="hover:cursor-pointer">Price: High to Low</option>
          </select>
        </div>

        {/* Collection Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {filteredProducts.map((item, index) => (
            <ProductItems key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;