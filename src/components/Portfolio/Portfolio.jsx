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
          <div className='col-xs-12 col-sm-6 col-md-4 mb-md-3'>
            <img src="" alt="" />
          </div>
          <div className='col-xs-12 col-sm-6 col-md-4 mb-md-3'>
            <img src="" alt="" />
          </div>
          <div className='col-xs-12 col-sm-6 col-md-4 mb-md-3'>
            <img src="" alt="" />
          </div>
          
          <div className='col-xs-12 col-sm-6 col-md-4 mab-3'>
            <img src="" alt="" />
          </div>
          <div className='col-xs-12 col-sm-6 col-md-8 mb-3'>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
