import { Switch, Route } from "react-router-dom";
import { Api } from "../components/pages/Api";
import { Home } from "../components/pages/Home";
import { DisplayedImage } from "../components/pages/Image";
import { Login } from "../components/pages/Login";
import { Map } from "../components/pages/Map";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/api">
        <Api />
      </Route>
      <Route path="/image">
        <DisplayedImage />
      </Route>
      <Route path="/map">
        <Map />
      </Route>
    </Switch>
  );
};
