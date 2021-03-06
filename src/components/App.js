import AppProvider from "../context/AppContext";
import "../styles/App.scss";
import Routing from "./Routing";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from '../theme/AppTheme'
import Loader from "./Loader";
function App() {
  return (
    <div className="App">
      <Router>
        <img className="background" src={require("../img/header.jpg")} alt="" />
        <ThemeProvider theme={theme}>
          <AppProvider>
            <Loader/>
            <Routing />
          </AppProvider>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
