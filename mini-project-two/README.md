# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## ListGroup - Slide in Menu:
I'm importing useState from the React library.
useState is a "hook" — a special function that lets me add state (data that can change) to a function component.
I'm using named import syntax (curly braces { }) because useState is exported as one of many named exports from react, not the default export.

I'm importing the entire PropTypes object from the prop-types package.
No curly braces here — PropTypes is the default export of this package, so I can name it whatever I want on import (though I keep it as PropTypes by convention so it's obvious what it is).
I have to run npm install prop-types first or this import will fail — it's a separate package, not built into React.

I'm defining a function component called ListGroup.
The { items, heading } is destructuring — React automatically passes one object (called props) into every component. Instead of writing props.items and props.heading everywhere inside my function, I'm pulling those two values straight out of that object right here in the parameter list.
This means whoever uses <ListGroup /> (in my case, App.jsx) needs to pass in an items prop and a heading prop, or these will be undefined.

I'm calling useState(-1) to create a piece of state. The -1 is my initial value — it means "nothing is selected yet" when the component first loads.
useState returns an array with exactly two things in it, and I'm destructuring that array:
selectedIndex — the current value of my state (starts at -1).
setSelectedIndex — the only function I'm allowed to use to update that state. I never change selectedIndex directly.
Why an array and not an object? So I can name both values whatever I want, in whatever order I want, using array destructuring.

I'm returning JSX — this is what actually gets rendered to the screen.
<> is a Fragment (shorthand for <React.Fragment>). I'm using it because a component can only return ONE parent element, but I have two things to return (<h1> and <ul>) that don't need an actual wrapping <div> in the HTML.
A Fragment lets me group them without adding an extra, meaningless <div> to my final HTML output.

I'm rendering the heading prop I destructured earlier.
The curly braces { } inside JSX mean "this is JavaScript, not plain text" — I'm telling React to evaluate the heading variable and print its value here, not print the literal text heading.

I'm starting an unordered list and giving it a CSS class of list-group.
I use className instead of class because class is a reserved word in JavaScript (used for defining JS classes), so JSX renamed the HTML attribute to avoid the conflict. React converts className back into class in the actual DOM.

I'm using { } again to drop into JavaScript mode.
.map() is an array method — it loops over every item in my items array and lets me return a new piece of JSX for each one.
(item, index) => — for every loop, .map() gives me two things automatically: the current value (item) and its position in the array (index, starting at 0). I need index later to check which item is selected.

I'm setting the CSS class conditionally using a ternary operator: condition ? valueIfTrue : valueIfFalse.
I'm comparing selectedIndex (my state — which item I clicked) to index (this specific item's position in the loop).
If they match, this is the item I clicked, so I add the active class on top of list-group-item for extra styling (like a highlight).
If they don't match, it just gets the plain list-group-item class.
This whole block re-runs every time selectedIndex changes, which is why clicking updates the highlight instantly.

React requires a unique key prop whenever I render a list with .map(). This is how React tracks which item is which between re-renders, so it can update the DOM efficiently instead of re-rendering the whole list every time.
I'm using item (the text itself) as the key since every string in my list is unique. If I had duplicate items, or if the list could reorder, I'd want a proper unique ID instead — key={item} is only safe here because my strings don't repeat.

I'm attaching a click handler to this <li>.
I'm using an arrow function () => {...} wrapping the call, instead of writing onClick={setSelectedIndex(index)} directly.
Why: if I didn't wrap it in a function, setSelectedIndex(index) would run immediately the moment the component renders — not when I actually click. Wrapping it in () => {} delays that call until the click event actually fires.
When clicked, it updates my state to this item's index, which triggers a re-render, which re-runs the ternary above and highlights this item.

{item} prints the actual text of this list item (e.g., "Home", "Explore").
))} closes out: the arrow function from .map(), the .map() call itself, and the { } JavaScript block I opened earlier. These three closes have to match up in the right order or I'll get a syntax error.
</ul> and </> close my list and my Fragment.
The final } closes the ListGroup function itself.

I'm attaching a propTypes property directly onto my ListGroup function — this only works because in JavaScript, functions are objects too, so I can add properties onto them after they're defined.
This tells React (in development mode) what type each prop is supposed to be, and .isRequired means React will log a console warning if that prop is ever missing when someone uses <ListGroup />.
This doesn't stop my app from running if I mess up — it's a safety net that warns me in the console, not a hard crash.

I'm exporting ListGroup as the default export of this file.
Because it's a default export, whoever imports it (my App.jsx) can name it anything they want: import ListGroup from "./components/ListGroup" — the name doesn't have to match exactly, unlike named exports.

useState = state that survives re-renders; setSelectedIndex is the only way I'm allowed to change it
{ } inside JSX = "run this as JavaScript"
Fragment <> = group elements without adding an extra DOM node
.map() = loop that builds JSX per array item; needs a unique key
Ternary in className = conditional styling based on state
() => {} around onClick = don't run immediately, wait for the click
propTypes = dev-time warnings if I pass the wrong prop type or forget one
export default = one primary export per file, importer can rename it freely
