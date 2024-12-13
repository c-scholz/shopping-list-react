import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './AppNav.css'

export const AppNav = () => {
  return (
    <nav className="app-nav">
      <NavLink className="app-nav__home" to="/" title="Dashboard"><img className="app-nav__logo" src={Logo} /><span className="app-nav__name">ShopXip</span></NavLink>
    </nav>
  )
}