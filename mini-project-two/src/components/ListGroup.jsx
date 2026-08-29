import { useState } from "react";
import PropTypes from "prop-types";

function ListGroup({ items, heading }) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

ListGroup.propTypes = {
  items: PropTypes.array.isRequired,
  heading: PropTypes.string.isRequired,
};

export default ListGroup;