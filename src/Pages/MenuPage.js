import React, { useState } from 'react'
import Products from '../Components/Products'
import Catagories from '../Components/Catagories'
import Navbar from '../Components/Navbar'
import FooterPegination from '../Components/FooterPegination'
import OffCanvas from '../Components/OffCanvas'
import { CardsData } from '../Data/KfcProductsData'
import Slider from '../Components/Slider'


const MenuPage = () => {
    const [cartCounter, setCartCounter] = useState(0)
    const incrementCart = ()=>{
      setCartCounter(cartCounter+1)
    };

    const [selectedCatId, setSelectedCatId] = useState(null);
    const [products, setProducts] = useState(CardsData);
    const onCatSelection = (cateId) =>{
      setSelectedCatId(cateId);
      console.log(cateId)
      const filteredProcuct = CardsData.filter(p => p.categoryId === cateId)
      setProducts(filteredProcuct);
    }

  return (
    <div>
      <OffCanvas />
      <Navbar cartCounter={cartCounter} />  
      <Slider /> 
      <Catagories onCatSelection={onCatSelection} />
      <Products incrementCart={incrementCart} CardsData={products} />
      <FooterPegination />
    </div>
  )
}

export default MenuPage
