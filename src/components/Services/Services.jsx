import React from 'react'
import './Services.css'
import ServicesBox from './ServicesBox.jsx'

// import laboratory from '../../../public/Icons/ServicesBox/laboratory.jsx'
// import noteBook from '../../../public/Icons/ServicesBox/noteBook.jsx'
// import medal from '../../../public/Icons/ServicesBox/medal.jsx'
// import clock from '../../../public/Icons/ServicesBox/clock.jsx'
// import phone from '../../../public/Icons/ServicesBox/phone.jsx'


export default function Services() {

    let ServicesBoxInfo = [
        {title:'Company Formation', description:'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor', },
        {title:'Stuff Management', description:'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor', },
        {title:'KPI Optimization', description:'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor', },
        {title:'Information Security', description:'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor', },
        {title:'Recrutinment', description:'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor', },
        {title:'Materials Supply', description:'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor', },
    ]
    
  return (
    <section className='Services_sct bg-light'>
        <div className='container'>
            <div className='row'>
                <ServicesBox {...ServicesBoxInfo[0]}/>
                <ServicesBox {...ServicesBoxInfo[1]}/>
                <ServicesBox {...ServicesBoxInfo[2]}/>
                <ServicesBox {...ServicesBoxInfo[3]}/>
                <ServicesBox {...ServicesBoxInfo[4]}/>
                <ServicesBox {...ServicesBoxInfo[5]}/>
            </div>
        </div>
    </section>
  )
}
