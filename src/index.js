import { legacy_createStore as createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const PLUS = "plus";
const MINUS = "minus";

const reducer = (count = 0, action) => {
  switch (action.type) {
    case PLUS:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const store = createStore(reducer);

const onChange = () => {
  number.innerText = store.getState();
};
store.subscribe(onChange);

const handlePlusButton = () => {
  store.dispatch({ type: PLUS });
};
const handleMinusButton = () => {
  store.dispatch({ type: MINUS });
};
plus.addEventListener("click", handlePlusButton);
minus.addEventListener("click", handleMinusButton);
