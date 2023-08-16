import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faDoorClosed, faHeart, faSearch, faThumbsUp, faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom' 
import '../styles/Header.css'
import { Link } from 'react-router-dom'


const Header = ({authenticate, setAuthenticate}) => {
  const menuList = [
    'BEST ',
    'WOMEN',
    'MEN',
    'INTERIOR',
    'KITCHEN',
    'ELECTRONICS',
    'DIGITAL',
    'BEAUTY',
    'FOOD',
    'LEISURE',
    'KIDS',
    'CULTURE'
  ]

  const navigate = useNavigate();
  // const goToLogin = () => {
  //   navigate('./login')
  // }
  const search = (event) => {
    if(event.key === "Enter") {
      let keyword = event.target.value;
      console.log('keyword', keyword)
      navigate(`/?q=${keyword}`)
    }
  }


  return (
    <div className='header'>
      <div className='header_sec'>
        <div className='title'>
          <div className='nav_logo'>
            <a className='logo' href="http://localhost:3000/">29CM</a>
          </div>
          <div className='settings'>
            <div className='settings_icon'>
              <FontAwesomeIcon icon={faUser} />
              <span>MY PAGE</span>
            </div>
            <div className='settings_icon'>
              <FontAwesomeIcon icon={faHeart} />
              <span>MY LIKE</span>
            </div>
            <div className='settings_icon'>
              <FontAwesomeIcon icon={faBagShopping} />
              <span>SHOPPING BAG</span>
            </div>
            {authenticate ? (
              <div className='settings_icon' onClick={() => setAuthenticate(false)}>
                <FontAwesomeIcon icon={faDoorClosed} />
                <span style={{cursor: 'pointer'}}>LOGOUT</span>
              </div>
            ) : (
              <div className='settings_icon' onClick={() => navigate('./login')}>
              <FontAwesomeIcon icon={faDoorClosed}/>
              <span style={{cursor: 'pointer'}}>LOGIN</span>
            </div>
            )}
          </div>  
        </div>
        <div className='search_btn'>
          <button
            className={`search-box`}
            onKeyPress={search}
          >
            <FontAwesomeIcon icon={faSearch}/>
          </button>
        </div>
        <div className='nav-menu-area'>
          <ul className='menu'>
            {menuList.map((menu, index) => (
              <li key={menu}>
                <Link to={`${menu}`} >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>

  )
}

export default Header
