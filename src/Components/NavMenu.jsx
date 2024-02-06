import { Link, useLocation } from 'react-router-dom';
import '../Sass/navbar.scss'

function Navbar() {
    const location = useLocation();
  
    return (
      <nav className='nav'>
        <ul className='nav_list'>
          <li className={location.pathname === '/' ? 'nav_list_item_active' : 'nav_list_item'}>
            <Link to='/'>
              Accueil
            </Link>
          </li>
          <li className={location.pathname === '/projects' ? 'nav_list_item_active' : 'nav_list_item'}>
            <Link to='/projects'>
              Projets
            </Link>
          </li>
          <li className={location.pathname === '/contact' ? 'nav_list_item_active' : 'nav_list_item'}>
            <Link to='/contact'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;