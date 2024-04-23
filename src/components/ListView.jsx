import React from 'react'
import ShopItem from './ShopItem'

export const ListView = ({ items }) => {
  return (
    <div className='products list'>
        {items.map((item, index) => {
            return <ShopItem key={`${index}${item.name}`} {...item}/>
        })} 
    </div>
  )
}

export default ListView