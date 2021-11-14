import "./App.css";
import { Route, Switch } from "react-router";
import Home from "./Components/home/Home";
import NavBar from "./Components/home/NavBar";
import CategoryList from "./Components/category/CategoryList";
import { Container } from "react-bootstrap";
import RecipeList from "./Components/recipe/RecipeList";
import RecipeDetail from "./Components/recipe/RecipeDetail";
import CategoryDetail from "./Components/category/CategoryDetail";
function App() {
  return (
    <>
      <NavBar />  
             {/* <RecipeDetail/> */}
      <Switch>
        <Route exact path="/category/:categorySlug/recipes">
          <Container>
            <RecipeList />
          </Container>
        </Route>
        {/* <Route exact="/category/:categorySlug">
          <CategoryDetail/>
        </Route> */}
        <Route exact path="/category">
          <Container>
            <CategoryList />
          </Container>
        </Route>
        <Route exact path="/">
          <div className="App">
            <Home />
          </div>
        </Route>
      </Switch>
    </>
  );
}

export default App;
