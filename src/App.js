import "./App.css";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="mockBee logo" width="180" height="180" />
        <h1 className="brand-title">
          Welcome to <span>TI Video Library!</span>
        </h1>
        <p className="brand-description">
          Get started by editing <code>src/App.js</code>
        </p>
      </header>
    </div>
  );
}

export default App;
