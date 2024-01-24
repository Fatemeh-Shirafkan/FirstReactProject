import React from 'react'
import './Team.css'
import LeftIndicator from '../../../public/Icons/LeftIndicator'
import PanelBox from './PanelBox.jsx'

export default function Team() {

    let PanelBoxInfo = [
        {title:'Expert Research' ,description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch'},
        {title:'Hi-Tech Engineering' ,description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {title:'Outstanding Results' ,description: ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    ]

  return (
    <section className='light_bg'>
        <div className='container team_box'>
            <div className='row'>
                <div className='col-12 col-sm-5 col-md-5 mb-5'>
                    <div className='team_content'>
                        <h2 className='team_content_title'>Why Us?</h2>
                        <span className='team_content_description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                    </div>
                    <a className='team_content_btn' href="#">More... <LeftIndicator/></a>
                </div>
                <div className='col-12 col-md-5 col-sm-7 panel_col'>
                    <div>
                        <div>
                            <PanelBox {...PanelBoxInfo[0]}/>
                            <PanelBox {...PanelBoxInfo[1]}/>
                            <PanelBox {...PanelBoxInfo[2]}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
