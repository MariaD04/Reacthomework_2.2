import React from 'react'

export const ShopItem = ({ name, color, price, img}) => {
  return (
    <article className='product'>
        <div className='image-container'>
            <img className="product-image" src={img} alt={name}/>
        </div>
        <h3 product-title>{name}</h3>
        <span product-color>{color}</span>
        <span className='product-price'>{$}{price}</span>
        <button className='product-button' type='button'>Add to cart</button> 
    </article>
  )
}

export default ShopItem