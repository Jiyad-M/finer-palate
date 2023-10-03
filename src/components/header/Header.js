import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div className='header'>
      <div className="top">
        <div className="contactHome"> <a href=""><i class="fa-solid fa-phone"></i>    (804)467-8266</a>
          <a href=""><i class="fa-solid fa-envelope"></i>catering@finarpalate.com</a>
        </div>
      </div>
      <div className="bottom">
        <div className="logo">
          <img src="https://finerpalate.com/wp-content/uploads/2021/08/Fine-Palate-Logo-horz-1920.png" alt="Logo" />
        </div>
        <div className="navbar">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="">Menus</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Header