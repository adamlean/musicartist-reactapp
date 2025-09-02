import { useState } from "react";
import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <header>
      <div className="navbar">
        {/* Burger: Show only when menu is closed */}
        <button
          className="burger"
          aria-label="Открыть меню"
          onClick={openMenu}
          style={{ display: isOpen ? "none" : undefined }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        {/* Cross: show only when menu is open */}
        <button
          className="close"
          aria-label="Закрыть меню"
          onClick={closeMenu}
          style={{ display: isOpen ? "flex" : "none" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Logo */}
        <Link to="/" className="logo">
          Music Artist
        </Link>

        {/* Navigation */}
        <nav className={`menu ${isOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/beats" onClick={closeMenu}>Beats</Link>
          <Link to="/discography" onClick={closeMenu}>Discography</Link>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#faq" onClick={closeMenu}>FAQ & Help</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        {/* Icons */}
        <div className="icon">
          <FaSearch />
          <div>
            <FaShoppingBag />
            <span>$0.00</span>
          </div>
          <div>
            <FaUser />
            <span>Log In</span>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`overlay ${isOpen ? "active" : ""}`}
        onClick={closeMenu}
      />
    </header>
  );
};

export default NavBar;
