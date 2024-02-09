import React from 'react'
import './Services.css'
import ServicesBox from './ServicesBox.jsx'

import Laboratory from '../../../public/Icons/ServicesBox/Laboratory.jsx'
import NoteBook from '../../../public/Icons/ServicesBox/NoteBook.jsx'
import Medal from '../../../public/Icons/ServicesBox/Medal.jsx'
import Clock from '../../../public/Icons/ServicesBox/Clock.jsx'
import Phone from '../../../public/Icons/ServicesBox/Phone.jsx'


export default function Services() {

    let ServicesBoxInfo = [
        {title:'Company Formation', description:'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor', icon: <Laboratory/>},
        {title:'Stuff Management', description:'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor',icon: <NoteBook/>},
        {title:'KPI Optimization', description:'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor',icon: <Medal/>},
        {title:'Information Security', description:'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor',icon: <Laboratory/>},
        {title:'Recrutinment', description:'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor',icon: <Medal/>},
        {title:'Materials Supply', description:'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor',icon: <NoteBook/>},
    ]
    
  return (
    <section className='Services_sct bg-light'>
        <div className='container'>
            <div className='row'>
                <ServicesBox  {...ServicesBoxInfo[0]}/>
                <ServicesBox  {...ServicesBoxInfo[1]}/>
                <ServicesBox {...ServicesBoxInfo[2]}/>
                <ServicesBox {...ServicesBoxInfo[3]}/>
                <ServicesBox {...ServicesBoxInfo[4]}/>
                <ServicesBox  {...ServicesBoxInfo[5]}/>
            </div>
        </div>
    </section>
  )
}
