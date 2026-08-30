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
The { items, heading, onSelectItem } is destructuring — React automatically passes one object (called props) into every component. Instead of writing props.items everywhere inside my function, I'm pulling those values straight out of that object in the parameter list.

I'm calling useState(-1) to create a piece of state. The -1 means "nothing is selected yet."
useState returns an array with exactly two things — selectedIndex (current value) and setSelectedIndex (the only function I'm allowed to use to update it). Array destructuring lets me name both whatever I want.

I extracted a handleSelect(index, item) function instead of writing the same two lines (setSelectedIndex + onSelectItem) separately inside my click handler and my keyboard handler. This is DRY — one place to change the "what happens on selection" logic instead of two.

I'm returning JSX wrapped in a <div className="list-group-wrapper">, not a Fragment — I need the wrapper div because Wrapper.css targets it directly for sizing (width: 280px).

I'm rendering the heading prop inside {} — curly braces in JSX mean "evaluate this as JavaScript," not "print this literal text."

I'm using .map() to loop over items. It gives me (item, index) for every iteration — I need index to check which item is selected and to build a stable key.

key={index}, not key={item} — I switched this from the item's text to its position. Using the text as a key breaks if two items in the array are ever identical (React would log a duplicate-key warning and can misassign DOM nodes). Index-based keys are safe here because I'm not reordering or filtering this list.

className is set with a ternary — condition ? valueIfTrue : valueIfFalse — comparing selectedIndex to this item's index to conditionally apply the active class.

tabIndex={0} makes each <li> focusable via keyboard Tab, since <li> isn't focusable by default the way a <button> is.
role="button" tells assistive tech this list item behaves like a button, even though it isn't one semantically.
aria-pressed={selectedIndex === index} tells screen readers whether this item is currently selected — the active CSS class is a visual-only signal, so this is the non-visual equivalent.
onKeyDown checks for Enter or Space (the two keys a real <button> responds to) and calls handleSelect. e.preventDefault() on Space stops the page from scrolling, which is the browser's default behavior for Spacebar.

onClick calls handleSelect(index, item) wrapped in an arrow function — if I wrote onClick={handleSelect(index, item)} directly, it would run immediately on render instead of waiting for the actual click.

{item} prints the item's text. Closing tags/braces have to nest in the right order or I get a syntax error.

propTypes: items is now arrayOf(PropTypes.string), not a bare array — this validates what's inside the array, not just that it is one. Since I render {item} as text and use it in the list, every item needs to actually be a string.

export default ListGroup — importers (App.jsx) can name it anything on import, since default exports aren't tied to a fixed name.

Quick reference:
useState = state that survives re-renders; setSelectedIndex is the only way to change it
{ } inside JSX = "run this as JavaScript"
.map() = loop that builds JSX per array item; needs a stable key
key={index} = safe here because the list isn't reordered/filtered; key={item} would break on duplicate values
Ternary in className = conditional styling based on state
tabIndex + role="button" + onKeyDown + aria-pressed = makes a non-button element keyboard-accessible and screen-reader-aware
handleSelect = single function shared by click and keyboard paths (DRY)
propTypes = dev-time warnings if I pass the wrong prop type or forget one
export default = one primary export per file, importer can rename it freely