import React from 'react'
import './Products.css'
import ProductsCard from './ProductsCard.jsx'

export default function Products() {

    // Cards info
    let allProduct = [
        {id:1, title:'Interior', type:'architecture', img:'/Products/01.jpg',},
        {id:2, title:'Trend', type:'setting', img:'/Products/02.jpg',},
        {id:3, title:'Fresh Style ', type:'philosophy', img:'/Products/03.jpg',}
    ]

  return (
    <section>
        <div className='product_sct container'>
            <div className='row mb-4'>
                <div className='col-12 col-sm-8 col-md-6'>
                    <h2 className='portfolio_title'>portfolio</h2>
                    <p className='portfolio_text'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua enim minim veniam exercitation</p>
                </div>
            </div>
            <div className='row'>
                <ProductsCard {...allProduct[0]} />
                <ProductsCard {...allProduct[1]} />
                <ProductsCard {...allProduct[2]} />
            </div>
        </div>
    </section>
)
}
