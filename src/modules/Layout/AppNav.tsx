import { NavLink } from 'react-router-dom'
import './AppNav.css'

export const AppNav = () => {
  return (
    <nav className="app-nav">
      <NavLink to="/">Dashboard</NavLink>
    </nav>
  )
}