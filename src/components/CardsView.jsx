import ShopCard from './ShopCard'

export const CardsView = ({ cards }) => {
  return (
    <div className='products card'>
        {cards.map((card, index) => {
            return <ShopCard key={`${index}${card.name}`} {...card}/>
        })}
    </div>
  )
}

export default CardsView