import React, { useRef } from 'react'

import { Container } from "reactstrap"
import Logo from '../../assets/images/res-logo.png'
import { NavLink, Link } from 'react-router-dom'
import '../../styles/Header.css'

const nav_links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
]


const Header = () => {

  const menuRef = useRef(null)

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu')

  return (
    <header className='header'>
      <Container>
        <div className="nav_wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={Logo} alt="" />
            <h5>Tasty Treat</h5>
          </div>

          {/*  Menu  */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu} >
            <div className="menu d-flex align-items-center gap-5">

                {
                  nav_links.map((item, index) => (
                    <NavLink 
                      
                      to={item.path} 
                      key={index}
                      className={navClass => navClass.isActive ? "active_menu" : ""}
                    >
                      {item.display}
                    </NavLink>
                  ))
                }

            </div>
          </div>

          {/*  Nav Right Icons  */}
          <div className="nav_right d-flex align-items-center gap-3">

            <span className='cart_icon'>
              <i className="ri-shopping-basket-line"></i>
              <span className='cart_badge'> 2 </span>
            </span>

            <span className="user">
              <Link to="/login">
                <i className="ri-user-line"></i>
              </Link>
            </span>

            <span className="mobile_menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header