import React from 'react';

export const ShopCard = ({ name, color, price, img }) => {
  return (
    <article className='product'>
        <header className='product-header'>
            <h3 className='product-title'>{name}</h3>
            <span className='product-color'>{color}</span>
        </header>
        <div className='product-main'>
            <img className='product-image' src={img} alt={name} />
        </div>
        <footer className='product-footer'>
            <span className='product-price'>$ {price}</span>
            <button className='product-button' type='button'>Add to cart</button>
        </footer>
    </article>
  );
};

export default ShopCard;