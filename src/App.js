import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavbarComp from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import LandingPage from "./pages/LandingPage";
import CocktailsPage from "./pages/CocktailsPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div className="App">
      <NavbarComp  />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/cocktails" component={CocktailsPage} />
        <Route exact path="/cart" component={CartPage} />
      </Switch>
    </div>
  );
}

export default App;
