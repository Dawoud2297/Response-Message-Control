import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <ToastContainer />
    </div>
  );
}

export default App;
