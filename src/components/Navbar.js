import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
        <div className="nav-header">
          <Link to="/">Home</Link>
          <button className="nav-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <Link to="/accordion">Snapdocs Accordion</Link>
          <Link to="/calculator">Calculator</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
