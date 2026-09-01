import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/NavBar";
import MissionSection from "./components/MissionSection";
import Hero from "./components/Hero";
import ExploreCities from "./components/ExploreCities";
import Footer from "./components/Footer";
import NeighborNotes from "./components/NeighborNotes/NeighborNotes";
import "./App.css";

function App() {
  // Single source of truth for menu open/closed — passed down to
  // Navbar (controls the hamburger icon) and used locally to toggle
  // the slide-menu class.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lets us change the URL in code (e.g. on a menu click) instead of
  // relying on <a href> links — required for handleSelectItem below.
  const navigate = useNavigate();

  // Static nav/list content. Each item now carries a `path` — a label
  // alone was enough for console.log, but navigation needs a real URL
  // to route to. Pages not built yet still get a real path (not "#")
  // so a missing page is visibly blank rather than silently doing nothing.
  const items = [
    { label: "Home", path: "/" },
    { label: "Explore", path: "/explore" },
    { label: "Neighbor Notes", path: "/neighbor-notes" },
    { label: "Leasing Jargon", path: "/leasing-jargon" },
    { label: "The Neighborhood Dashboard", path: "/dashboard" },
    { label: "The Pre-Lease Checklist", path: "/checklist" },
    { label: "Saved", path: "/saved" },
    { label: "Profile", path: "/profile" },
    { label: "Settings", path: "/settings" },
    { label: "Sign in", path: "/signin" },
    { label: "Sign up", path: "/signup" },
  ];

  // Fires when a ListGroup item is selected — navigates to that item's
  // path, then closes the menu so it doesn't stay open once the user
  // has navigated. (Previously only logged the item; nothing actually
  // moved the user to a new page.)
  const handleSelectItem = (item) => {
    navigate(item.path);
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

      {/* Routes swaps which page renders here based on the current URL.
          Only "/" and "/neighbor-notes" are wired up so far — every
          other path in `items` above will render a blank page until
          its own <Route> is added, same as an unbuilt page in a
          multi-page site. */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MissionSection />
              <Hero />
              <ExploreCities />
            </>
          }
        />
        <Route path="/neighbor-notes" element={<NeighborNotes />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;