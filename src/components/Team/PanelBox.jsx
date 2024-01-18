import React from 'react'
import './Team.css'

export default function PanelBox({title, description}) {
  return (

    <div className='panel'>
        <div className='panel_header'>
            <h4>
                <a href="#">{title}</a>
            </h4>
        </div>
        <div className='panel_body'>
            <div>{description}</div>
        </div>
    </div>

  )
}
