import { useState } from "react";

function ListGroup() {
  const items = [
    "Home",
    "Explore",
    "Neighbor Notes",
    "Leasing Jargon",
    "The Neighborhood Dashboard",
    "The Pre-Lease Checklist",
    "Saved",
    "Profile",
    "Settings",
    "Sign in",
    "Sign up",
  ];

//StateHook
const [selectedIndex, setSelectedIndex] = useState(-1);


  return (
    <>
      {/*fragment to wrap all of these children */}
      <h1>Slide in Menu</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {setSelectedIndex(index)}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
