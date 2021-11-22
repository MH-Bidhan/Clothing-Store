import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/navbar.component";
import HatsPage from "./pages/hats-page/hatspage.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import SignInSignUpPage from "./pages/sign-in-sign-up-page/sign-in-sign-up.component";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUpPage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
