import './Header.css'
import NavBar from './NavBar.jsx'

export default function Header() {
  return (
    <header className='header'>
      <NavBar></NavBar>

      <div className='content_box'>
        <div>
          <h1 className='content_box_title'>PERSONAL APPROACH</h1>
          <p className='content_box_text'>Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua enim minim estudiat veniam siad venumus dolore</p>
        </div>
        <a className='content_box_btn' href="">Take a Tour</a>
      </div>
    </header>
  )
}