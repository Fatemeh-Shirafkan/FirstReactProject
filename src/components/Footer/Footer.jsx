import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <section>
      <div className='container'>
        <div className='row first_footer_sct'>
          <div className='col-2'>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Credentials</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className='col-2'>
            <ul>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">YouTube</a></li>
            </ul>
          </div>
          <div className='col-3'>
            <ul>
              <li><a href="#">Subscribe to Our Newsletter</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='container second_footer_sct'>
        <div className='row'>
          <div className='col-6'>
            <img src="./public/Logo/logo-dark.png" height={11} width={100} alt="" />
          </div>
          <div className='col-6 text_right'>
            <p>FlameOnePage Theme Powered by: 
              <a href="">fatemeh shirafkan</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}




