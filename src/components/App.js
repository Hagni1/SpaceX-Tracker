import AppProvider from "../context/AppContext";
import "../styles/App.scss";
import Routing from "./Routing";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <img className="background" src={require('../img/header.jpg')} alt="" />
        <AppProvider>
          <Routing />
        </AppProvider>
      </Router>
    </div>
  );
}

export default App;
