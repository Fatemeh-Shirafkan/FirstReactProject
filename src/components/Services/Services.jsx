import React from 'react'
import './Services.css'
import ServicesBox from './ServicesBox.jsx'


let ServicesBoxInfo = [
    {title:'Company Formation', description:'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor',},
    {title:'Stuff Management', description:'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor',},
    {title:'KPI Optimization', description:'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor',},
    {title:'Information Security', description:'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor',},
    {title:'Recrutinment', description:'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor',},
    {title:'Materials Supply', description:'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor',},
]


export default function Services() {
  return (
    <section className='Services_sct'>
        <div className='container'>
            <div className='row'>
                <ServicesBox/>
                <ServicesBox/>
                <ServicesBox/>
                <ServicesBox/>
                <ServicesBox/>
                <ServicesBox/>
            </div>
        </div>
    </section>
  )
}
