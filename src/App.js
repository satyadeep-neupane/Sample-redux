import { useState, useReducer } from "react";

const initialState = {
    count: 0
};

const reducerFunction = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            return state;
    }
}

const INCREMENT = () => {
    return {type: "increment"}
}

function App()
{
    const [state, dispatch] = useReducer(reducerFunction, initialState);

    return (
        <div>
            <h1>Count = {state.count}</h1>
            <button onClick={() => dispatch(INCREMENT())}>Increment</button>
            <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
        </div>
    );
}

export default App;