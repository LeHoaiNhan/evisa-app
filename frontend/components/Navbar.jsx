import { useState } from 'react'
import './Navbar.css'

export default function Navbar({ onApplyClick }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          eVisa
        </div>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#">Điểm đến</a></li>
          <li><a href="#">Loại visa</a></li>
          <li><a href="#">Hướng dẫn</a></li>
          <li><a href="#">Hỗ trợ</a></li>
        </ul>

        <div className="navbar-right">
          <button className="btn-login hide-mobile">Đăng nhập</button>
          <button className="btn-primary" onClick={onApplyClick}>Đăng ký visa</button>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span/><span/><span/>
          </button>
        </div>
      </div>
    </nav>
  )
}
