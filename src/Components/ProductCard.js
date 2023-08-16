import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/ProductCard.css'


const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`)
  }
  return (
    <div className='card' onClick={showDetail}>
      <img src={item.img} />  
      <div className='desc'>
        <a href='#' className='brand'>{item.brand}</a>
        <h5 className='product'>{item.title}</h5>
        <div className='before_price'>{item.before_price}</div>
        <div className='price'>
          <div className='sale'>{item.sale}</div>
          <div className='sale_price'>{item.sale_price}</div>
        </div>
        <div className='delivery'>무료배송</div>
      </div>
    </div>
  )
}

export default ProductCard
