import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT, DECREMENT } from './store/slice/slice.counter';

function App() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <>
            <h1>RTK Store</h1>
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
