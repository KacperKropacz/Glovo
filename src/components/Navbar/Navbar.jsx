import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

    const [menu, setMenu] = useState("Menu")

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("Strona główna")} className={menu==="Strona główna"?"active":""}>Strona Główna</li>
        <li onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</li>
        <li onClick={()=>setMenu("Aplikacja")} className={menu==="Aplikacja"?"active":""}>Aplikacja</li>
        <li onClick={()=>setMenu("Kontakt")} className={menu==="Kontakt"?"active":""}>Kontakt</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
        </div>
        <button>Zarejestruj się</button>
      </div>
    </div>
  )
}

export default Navbar
