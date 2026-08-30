import { useState } from "react";
import PropTypes from "prop-types";
import './ListGroup.css';

// Renders a clickable list; tracks which item is selected locally,
// and notifies the parent via onSelectItem when the user picks one.
// items are { label, path } objects — label is what's displayed,
// path is what the parent uses to navigate (see App.jsx's handleSelectItem).
function ListGroup({ items, heading, onSelectItem }) {
  // -1 = nothing selected yet. Kept as an index (not the item itself)
  // so "active" styling can be matched by position.
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Shared logic for both click and keyboard selection — kept in one
  // place (DRY) rather than duplicating setSelectedIndex/onSelectItem
  // inside both the onClick and onKeyDown handlers.
  const handleSelect = (index, item) => {
    setSelectedIndex(index);
    onSelectItem(item); // passes the whole { label, path } object up to the parent
  };

  return (
    <div className="list-group-wrapper">
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            // Toggle the "active" class only on the currently selected row
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index} // switched from key={item} — safe even if items repeat
            tabIndex={0} // makes the <li> focusable — not focusable by default
            role="button" // tells assistive tech this behaves like a button
            aria-pressed={selectedIndex === index} // non-visual equivalent of the "active" class, for screen readers
            onClick={() => handleSelect(index, item)}
            onKeyDown={(e) => {
              // Enter and Space are the two keys a real <button> responds to —
              // replicating that behavior since this is a styled <li>, not a <button>
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault(); // stop page scroll on Spacebar
                handleSelect(index, item);
              }
            }}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Runtime prop validation
ListGroup.propTypes = {
  // items are { label, path } objects (needed for routing in App.jsx),
  // not plain strings — tightened the shape so PropTypes actually
  // catches a bad item instead of silently allowing anything.
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
  heading: PropTypes.string.isRequired,
  onSelectItem: PropTypes.func.isRequired,
};

export default ListGroup;