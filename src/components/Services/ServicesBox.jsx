import React from 'react'
import './Services.css'

export default function ServicesBox({title, description, icon}) {
  return (
    <div className='col-sm-6 col-md-4 service'>
        <div className="service_box" >
            <div class="vservice_box_icon">
                {icon}
            </div>
            <div className="service_box_info">
                <h3 className="service_box_info_title">{title}</h3>
                <p className="service_box_info_description">{description}</p>
            </div>
            <a href="#" class=""></a>    
        </div>
    </div>
  )
}
