import Counter from "./components/Counter";
import Value from "./components/Value";

function App() {
  const count = 5;

  return (
    <div className="App">
      <Value></Value>
      <Counter count={count}></Counter>
    </div>
  );
}

export default App;
