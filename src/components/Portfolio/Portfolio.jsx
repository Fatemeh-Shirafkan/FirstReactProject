import React from 'react'
import './Portfolio.css'

export default function Portfolio() {
  return (
    <section>
      <div className='container portfolio_sct'>
        <div className='row mb-4'>
          <div className='col-sm-6'>
            <h2 className='product_title'>Recent Projects</h2>
              <p className='product_text'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua enim minim veniam exercitation</p>
          </div>
        </div>

        <div className='row'>
          <div className='col-12 col-md-4 mb-3'>
            <img className='portfolio_img' src="./public/Portfolio/01.jpg" alt="" />
          </div>
          <div className='col-12 col-md-4 mb-3'>
            <img className='portfolio_img' src="./public/Portfolio/02.jpg" alt="" />
          </div>
          <div className='col-12 col-md-4 mb-3'>
            <img className='portfolio_img' src="./public/Portfolio/03.jpg" alt="" />
          </div>
          
          <div className='col-12 col-md-4 mb-3'>
            <img className='portfolio_img' src="./public/Portfolio/04.jpg" alt="" />
          </div>
          <div className='col-12 col-md-8 mb-3'>
            <img className='portfolio_img' src="./public/Portfolio/05.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
