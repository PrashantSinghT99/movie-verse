import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Header.css'
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/"><img className="header__icon" src="https://moviesverse.cx/wp-content/uploads/2022/10/moviesverse-logo.png" /></Link>
        <Link to="/movieVerse/popular" style={{ textDecoration: "none" }}><span>Popular</span></Link>
        <Link to="/movieVerse/top_rated" style={{ textDecoration: "none" }}><span>Top Rated</span></Link>
        <Link to="/movieVerse/upcoming" style={{ textDecoration: "none" }}><span>Upcoming</span></Link>
      </div>
    </div>
  )
}
export default Header;