import './NavBar.css'
import SVGComponent from '../../../public/Icons/HamburgerMenu'
export default function NavBar() {
  return (
    <div className='navBar'>
      <nav className='container'>
        <div className='row align-items-center'>
          <div className='col'>
            <div className='logo'>
              <img width={146} src="./public/Logo/logo-dark.png" alt="Logo"/>
            </div>
          </div>
          <div className='col'>
            <ul className='nav_list'>
              <li className='nav_item'>
                <a className='nav_item_child nav_item-hover' href="">HOME</a>
                </li>
              <li className='nav_item'>
                <a className='nav_item_child nav_item-hover' href="">TEAM</a>
                </li>
              <li className='nav_item'>
                <a className='nav_item_child nav_item-hover' href="">SERVICES</a>
                </li>
              <li className='nav_item'>
                <a className='nav_item_child nav_item-hover' href="">CREDENTIALS</a>
                </li>
              <li className='nav_item'>
                <a className='nav_item_child nav_item-hover' href="">PRICING</a>
                </li>
              <li className='nav_item'>
                <a className='nav_item_child nav_item-hover' href="">CONTACT</a>
                </li>
            </ul>

            {/* Responsive part for Hamburger menue */}
            {/* <div className='hamburgerMenu'>
              <SVGComponent></SVGComponent>
            </div>
            <nav>
            <ul>
                <li><a href="">HOME</a></li>
                <li><a href="">TEAM</a></li>
                <li><a href="">SERVICES</a></li>
                <li><a href="">CREDENTIALS</a></li>
                <li><a href="">PRICING</a></li>
                <li><a href="">CONTACT</a></li>
              </ul>
            </nav> */}
          </div>
        </div>
      </nav>
    </div>
  )
}