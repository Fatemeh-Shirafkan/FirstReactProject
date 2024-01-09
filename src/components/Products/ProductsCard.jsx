import React from 'react'
import './Products.css'

export default function ProductsCard() {
  return (
    <div className='col-sm-4 mb-sm-3'>
        <div className="m-b-20 product_card_img_box">
            <img className="product_card_img" src="Products/01.jpg" alt="Latest Products Image"/>
        </div>

        <h4>
            <a href="#">Interior</a>
            <span className="margin-l-20">Architecture</span>
        </h4>

        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor</p>

        <a className="" href="#">Details</a>

    </div>
  )
}
