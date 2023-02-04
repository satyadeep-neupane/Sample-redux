import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT, DECREMENT } from './store/slice/slice.counter';

import { asyncIncrementByOne, asyncDecrementByOne } from './store/slice/slice.counter';

function App() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <>
            <h1>RTK Store 2</h1>
            <div>
                <h1>Count = {count}</h1>
            </div>
            <div>
                <p>Sync</p>
                <button onClick={() => dispatch(DECREMENT())}>-</button>
                <button onClick={() => dispatch(INCREMENT())}>+</button>
                <p>Async</p>
                <button onClick={() => dispatch(asyncIncrementByOne())}>+</button>
                <button onClick={() => dispatch(asyncDecrementByOne(count))}>-</button>
            </div>
        </>
    );
}

export default App;
