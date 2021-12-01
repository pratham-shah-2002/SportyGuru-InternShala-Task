import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import { UniState } from "./context/UniContext";

function App() {
  return (
    <UniState>
      <div className="App">
        <NavBar />
        <Home />
      </div>
    </UniState>
  );
}

export default App;
