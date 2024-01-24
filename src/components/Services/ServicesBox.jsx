import React from 'react'
import './Services.css'

// import laboratory from '../../../public/Icons/ServicesBox/laboratory.jsx'
// import noteBook from '../../../public/Icons/ServicesBox/noteBook.jsx'
// import medal from '../../../public/Icons/ServicesBox/medal.jsx'
// import clock from '../../../public/Icons/ServicesBox/clock.jsx'
// import phone from '../../../public/Icons/ServicesBox/phone.jsx'


export default function ServicesBox({title, description, icon}) {
  return (
    <div className='col-sm-4 mb-sm-2'>
        <div class="" >
            <div class="service-element">
                {icon}
            </div>
            <div class="service-info">
                <h3 class="">{title}</h3>
                <p class="">{description}</p>
            </div>
            <a href="#" class=""></a>    
        </div>
    </div>
  )
}
