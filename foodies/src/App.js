import "./App.css";
import { Route, Switch } from "react-router";
import Home from "./Components/home/Home";
import NavBar from "./Components/home/NavBar";
function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/">
          <div className="App">
            <Home />
          </div>
        </Route>
      </Switch>
    </>
  );
}

export default App;
