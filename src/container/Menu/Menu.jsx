import React from 'react'

import { data } from '../../constants'
import { MenuItem, SubHeading } from '../../components'
import './Menu.css'

const Menu = () => (
    <div className='app__menu app__wrapper app__bg section__padding'>
        <div className='app__menu-title'>
            <SubHeading title={"Explore our delicious offerings"} />
            <h1 className='headtext__cormorant'>Today's Menu</h1>
        </div>
        
        <div className='app__menu-content'>
            <div className='app__menu-content_wines'>
                <p className='app__menu-content_heading'>Wine & Beer</p>
                <div className='app__menu-content_items'>
                    {data.wines.map((wine, index) => (
                        <MenuItem key = {wine.title + index} title = {wine.title} price = {wine.price} tags = {wine.tags} />
                    ))}
                </div>   
            </div>

            <div className='app__menu-content_cocktails'>
                <p className='app__menu-content_heading'>Cocktails</p>
                <div className='app__menu-content_items'>
                    {data.cocktails.map((cocktail, index) => (
                        <MenuItem key = {cocktail.title + index} title = {cocktail.title} price = {cocktail.price} tags = {cocktail.tags} />
                    ))}
                </div>   
            </div>

            <div className='app__menu-content_foods'>
                <p className='app__menu-content_heading'>Foods</p>
                <div className='app__menu-content_items'>
                    {data.foods.map((food, index) => (
                        <MenuItem key = {food.title + index} title = {food.title} price = {food.price} tags = {food.tags} />
                    ))}
                </div>   
            </div>
        </div>
    </div>
)

export default Menu