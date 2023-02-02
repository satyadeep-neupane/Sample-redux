import { useSelector, useDispatch } from "react-redux";
import { INCREMENT, DECREMENT } from "./store";

function App() {
    const count = useSelector((state) => state.value);
    const dispatch = useDispatch();
    return (
        <>
            <h1>Redux Store</h1>
            <div>
                <h1>Count = {count}</h1>
            </div>
            <div>
                <button onClick={() => dispatch(DECREMENT())}>-</button>
                <button onClick={() => dispatch(INCREMENT())}>+</button>
            </div>
        </>
    );
}

export default App;
