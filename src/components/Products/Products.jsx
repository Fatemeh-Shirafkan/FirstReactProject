import React from 'react'
import './Products.css'
import ProductsCard from './ProductsCard.jsx'

export default function Products() {
  return (
    <section>
        <div className='product_sct container'>
            <div className='row mb-5'>
                <div className='col-sm-6'>
                    <h2 className='product_title'>Recent Projects</h2>
                    <p className='product_text'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua enim minim veniam exercitation</p>
                </div>
            </div>
            <div className='row'>
                <ProductsCard></ProductsCard>
                <ProductsCard></ProductsCard>
                <ProductsCard></ProductsCard>
            </div>
        </div>
    </section>
)
}
