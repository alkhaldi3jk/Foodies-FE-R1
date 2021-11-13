import "./App.css";
import { Route, Switch } from "react-router";
import Home from "./Components/home/Home";
import NavBar from "./Components/home/NavBar";
import CategoryList from "./Components/category/CategoryList";
function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/category">
          <CategoryList/>
        </Route>
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
