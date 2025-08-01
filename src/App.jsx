import './App.css'
import useCounterStore from './store/counterStore'


function App() {

  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const resetCount = useCounterStore((state) => state.resetCount);

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>Count: {count}</h1>
      <button onClick={increment}>＋</button>
      <button onClick={decrement}>－</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default App;
