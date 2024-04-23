import { useState } from 'react'
import IconSwitch from './IconSwitch'
import CardsView from './CardsView'
import ListView from './ListView'
import products from '../data/products'

export const Store = () => {
    const [icon, setIcon] = useState('view_module')
    const module = icon === 'view_module'

    const handleSwitch = () => {
        const nextIcon = module ? 'view_list' : 'view_module'
        setIcon(nextIcon)
    }
    return (
        <>
            <header className='header'>
                <IconSwitch icon={icon} onSwitch={handleSwitch}/>
            </header>

            <div className='body'>
                {
                    module ? <CardsView cards={products}/> : <ListView items={products}/>
                }
            </div>
        </>
    )
}
