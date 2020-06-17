import React from "react";
import { Header } from "./components/Header/Header";
import { ListofHeroes } from "./components/Main/ListofHeroes/ListofHeroes";
import { Switch, Route } from "react-router-dom";
import { Search } from "./components/Serach/Serach";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Switch>
        <Route exact path="/" component={ListofHeroes} />
        <Route path="/search/:name"/>
      </Switch>
    </div>
  );
}

export default App;

//https://gateway.marvel.com:443/v1/public/characters?name=IronMan&apikey=
