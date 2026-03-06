import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import BrandLogo from "./BrandLogo";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-content">
        <BrandLogo />

        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#categories">Exams</a>
          <Link to="/signup">Register</Link>
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <Link to="/login" className="ghost-btn">
            Login
          </Link>
          <Link to="/exam" className="nav-btn">
            Start Practice
          </Link>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="#features" onClick={() => setMenuOpen(false)}>
            Features
          </a>
          <a href="#categories" onClick={() => setMenuOpen(false)}>
            Exams
          </a>
          <Link to="/signup" onClick={() => setMenuOpen(false)}>
            Register
          </Link>
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            Login
          </Link>
          <Link to="/exam" onClick={() => setMenuOpen(false)}>
            Start Practice
          </Link>
        </div>
      )}
    </header>
  );
}