import React from "react";
import { Header } from "./components/Header/Header";
import { HeroInfo } from "./components/HeroInfo/HeroInfo";
import { ListofHeroes } from "./components/Main/ListofHeroes/ListofHeroes";
import { Switch, Route } from "react-router-dom";
import { Search } from "./components/Serach/Serach";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ListofHeroes} />
        <Route path="/search/:name"/>
      <ListofHeroes />
      <HeroInfo />
      </Switch>
    </div>
  );
}

export default App;
