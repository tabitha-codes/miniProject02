import ListGroup from "./components/ListGroup";
import "./App.css";



function App() {
  let items = [
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
  return (
    <div>
  <ListGroup items={items} heading="Slide in Menu"/>
  </div>
  );
}

export default App;
