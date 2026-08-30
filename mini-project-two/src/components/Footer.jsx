import "./Footer.css";

function Footer() {
  // Computed on every render — fine for a footer year since it's cheap
  // and only actually changes once per calendar year.
  const year = new Date().getFullYear();

  return (
    <footer className="footer footer-fixed">
      <p>&copy; {year} Lease Lens. All rights reserved.</p>
      <ul className="footer-links">
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#privacy">Privacy</a></li>
      </ul>
    </footer>
  );
}

export default Footer;