import React from "react";
import { Switch, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { HeroInfo } from "./components/HeroInfo/HeroInfo";
import { ListofHeroes } from "./components/Main/ListofHeroes/ListofHeroes";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ListofHeroes} />
        <Route path="/info/:id" component={HeroInfo} />
      </Switch>
    </div>
  );
}

export default App;
