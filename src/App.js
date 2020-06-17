import React from "react";
import { Header } from "./components/Header/Header";
import { HeroInfo } from "./components/HeroInfo/HeroInfo";
import { ListofHeroes } from "./components/Main/ListofHeroes/ListofHeroes";
import { Switch, Route } from "react-router-dom";
import { Search } from "./components/Serach/Serach";
import { Hero } from "./components/Main/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ListofHeroes} />
        <Route path="/search/:name" />
        <Route path="/info/:id" component={HeroInfo} />
      </Switch>
    </div>
  );
}

export default App;
