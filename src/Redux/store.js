import { createStore } from "redux";

function countReducer(state = { value: 1 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
        if(state.value > 0)
            return { value: state.value - 1 };
        else
            return state;
    default:
      return state;
  }
}

function INCREMENT() {
  return { type: "INCREMENT" };
}

function DECREMENT() {
    return { type: "DECREMENT" };
  }
  
export {INCREMENT, DECREMENT}

const store = createStore(countReducer);

export default store;