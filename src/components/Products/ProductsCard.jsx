import React from 'react'
import './Products.css'

export default function ProductsCard({title, type, img}) {
  return (
    <div className='col-sm-6 col-lg-4 mb-sm-3'>
        <div className="mb-4 product_card_img_box">
            <img className="product_card_img" src={img} alt="Latest Products Image"/>
        </div>

        <h4 className='product_card_header'>
            <a href="#">{title}</a>
            <span>{type}</span>
        </h4>

        <p className='product_card_content'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor</p>

        <a className="details" href="#">Details</a>

    </div>
  )
}
