import React from 'react'
import Card from './Card'
 
const Products = ({incrementCart, CardsData}) => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-2">
   {
    CardsData.map(data => <Card key={data.id} data={data} incrementCart={incrementCart} /> )
   }
   </div>
  )
}

export default Products
