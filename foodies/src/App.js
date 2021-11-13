import "./App.css";
import { Route, Switch } from "react-router";
import Home from "./Components/home/Home";
import NavBar from "./Components/home/NavBar";
import CategoryList from "./Components/category/CategoryList";
import { Col, Row,Container } from "react-bootstrap";
function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/category">
          <Container>
       
            <CategoryList />
          </Container>
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
