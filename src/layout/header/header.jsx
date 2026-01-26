import './header.css';
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="header-inner">
        <div className="logo">
          <img src={logo} alt='logo' width={100} height={50}/> 
        </div>
        <nav>
          <ul >
            <Link to='/'><li>Главная</li></Link>
            <Link to='/about'><li>О проекте</li></Link>
            <Link to='/contacts'><li>Контакты</li></Link>
            <Link to='/monitoring'><li>Мониторинг</li></Link>
          </ul>
        </nav>
        </div>
      </div>
    </header>
  )
}

export default Header