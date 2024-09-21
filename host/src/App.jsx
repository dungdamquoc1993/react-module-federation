import "./App.css";

import Button from "remoteApp/Button";
import RemoteApp from "remoteApp/App";
import useStore from "remoteApp/store";
import("remoteApp/WebComponents");

function App() {
  const [count, setCount] = useStore();

  return (
    <div className="App">
      <h1>Host Application</h1>
      <Button />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="card"><app-component></app-component></div>
    </div>
  );
}

export default App;
