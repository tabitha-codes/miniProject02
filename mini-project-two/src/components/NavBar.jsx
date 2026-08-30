import PropTypes from "prop-types";
import "./NavBar.css";

// Top navigation bar with a hamburger toggle for a mobile slide-out menu.
// `isOpen` and `onToggle` are lifted up to a parent — this component is
// "controlled": it doesn't manage its own open/closed state.
function Navbar({ isOpen, onToggle }) {
  return (
    <nav className="navbar">
      {/* Hamburger button — toggles the menu open/closed.
          className swaps between "hamburger" and "hamburger open" so the
          CSS can animate the bars into an X when isOpen is true. */}
      <button
        className={isOpen ? "hamburger open" : "hamburger"}
        onClick={onToggle}
        aria-label="Toggle menu" // accessible name since there's no visible text
      >
        {/* Three bars = the hamburger icon. CSS targets them by
            nth-child to rotate/fade each one differently on open. */}
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Logo/brand slot — currently empty, no content or image */}
      <div className="navbar-logo"></div>

      {/* Nav links — anchors point to in-page sections via hash IDs */}
      <ul className="navbar-links">
        <li><a href="#home"></a></li>
        <li><a href="#about"></a></li>
        <li><a href="#projects"></a></li>
        <li><a href="#contact"></a></li>
      </ul>
    </nav>
  );
}

// Runtime prop validation — both props are required, so React will warn
// in the console if either is missing or the wrong type.
Navbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Navbar;