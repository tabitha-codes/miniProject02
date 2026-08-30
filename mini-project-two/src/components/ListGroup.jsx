import { useState } from "react";
import PropTypes from "prop-types";
import './ListGroup.css';

function ListGroup({ items, heading, onSelectItem }) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Shared logic for both click and keyboard selection — kept in one
  // place (DRY) rather than duplicating setSelectedIndex/onSelectItem
  // inside both the onClick and onKeyDown handlers.
  const handleSelect = (index, item) => {
    setSelectedIndex(index);
    onSelectItem(item);
  };

  return (
    <div className="list-group-wrapper">
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index} // switched from key={item} — safe even if items repeat
            tabIndex={0}
            role="button"
            aria-pressed={selectedIndex === index}
            onClick={() => handleSelect(index, item)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault(); // stop page scroll on Spacebar
                handleSelect(index, item);
              }
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

ListGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired, // tightened from bare array
  heading: PropTypes.string.isRequired,
  onSelectItem: PropTypes.func.isRequired,
};

export default ListGroup;