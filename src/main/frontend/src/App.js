import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routers from "./routers/Router";

function App() {
  return (
    <div className="App font-mono">
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
