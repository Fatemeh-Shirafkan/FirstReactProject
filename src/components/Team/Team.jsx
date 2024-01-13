import React from 'react'
import './Team.css'
import LeftIndicator from '../../../public/Icons/LeftIndicator'

export default function Team() {
  return (
    <section className='light_bg'>
        <div className='container team_box'>
            <div className='row'>
                <div className='col-md-5 col-sm-5'>
                    <div className='team_content'>
                        <h2 className='team_content_title'>Why Us?</h2>
                        <span className='team_content_description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                    </div>
                    <a className='team_content_btn' href="#">More... <LeftIndicator/></a>
                </div>
                <div className='col-md-5 col-sm-7'>
                    <div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
