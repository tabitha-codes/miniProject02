import { useState, useEffect } from "react";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // Single source of truth for menu open/closed — passed down to
  // Navbar (controls the hamburger icon) and used locally to toggle
  // the slide-menu class.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Static nav/list content — not derived from props or state.
  const items = [
    "Home", "Explore", "Neighbor Notes", "Leasing Jargon",
    "The Neighborhood Dashboard", "The Pre-Lease Checklist",
    "Saved", "Profile", "Settings", "Sign in", "Sign up",
  ];

  // Fires when a ListGroup item is selected — closes the menu after
  // selection so it doesn't stay open once the user has navigated.
  const handleSelectItem = (item) => {
    console.log(item);
    setIsMenuOpen(false);
  };

  // Escape-key dismissal — covers keyboard users who opened the menu
  // but don't want to select an item, and doesn't depend on the mouse
  // ever entering/leaving the menu (unlike onMouseLeave below).
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div className="page-wrapper">
      <Navbar isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)} />

      {/* Closes the menu when the mouse leaves it — a hover-based
          dismiss, separate from the hamburger's click-to-toggle and
          the Escape-key handler above */}
      <div
        className={isMenuOpen ? "slide-menu open" : "slide-menu"}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        <ListGroup items={items} heading="Lease Lens" onSelectItem={handleSelectItem} />
      </div>

      <Footer />
    </div>
  );
}

export default App;