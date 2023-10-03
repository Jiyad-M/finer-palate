import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className="image1">
            <img src="https://seal-richmond.bbb.org/seals/blue-seal-150-110-whitetxt-bbb-63412736.png" alt="" />
        </div>
        <div className="image2">
            <img src="https://finerpalate.com/wp-content/uploads/2022/01/SWaM-150.png" alt="" />
        </div>
        <div className="content">
            <p>Finer Palate
P.O. Box 32063 Henrico, VA 23294
804.467.8266</p>
        </div>
        <div className="social">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-solid fa-square-xmark"></i>
        </div>
    </div>
  )
}

export default Footer