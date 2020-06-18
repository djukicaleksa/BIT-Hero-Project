import React from "react";
import { Header } from "./components/Header/Header";
import { HeroInfo } from "./components/HeroInfo/HeroInfo";
import { ListofHeroes } from "./components/Main/ListofHeroes/ListofHeroes";
import { Switch, Route } from "react-router-dom";
import { ComicInfo } from "./components/ComicInfo/ComicInfo";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ListofHeroes} />
        <Route path="/search/:name" />
        <Route path="/info/:id" component={HeroInfo} />
        <Route path="/comic/:id" component={ComicInfo} />
      </Switch>
    </div>
  );
}

export default App;
