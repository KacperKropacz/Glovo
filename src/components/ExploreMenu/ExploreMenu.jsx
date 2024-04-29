import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-test'>gsdvoyhvgyulbgvddddddddddddddddddddddddddddddddddddddddddddddghzlvnglhbvzzzzzzzzzzzzzzzzzzzzzzzaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaazzzzzz</p>  
        <div className="explore-menu-list"></div>
          {menu_list.map((item,index)=>{
            return (
                <div key={index}className='explore-menu-list-item'>
                    <img src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
          })}    
    </div>
  )
}

export default ExploreMenu
