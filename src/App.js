import React from "react";


import { Switch, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { HeroInfo } from "./components/HeroInfo/HeroInfo";
import { ComicInfo } from "./components/ComicInfo/ComicInfo";
import { ListofHeroes } from "./components/Main/ListofHeroes/ListofHeroes";

import { ErrorBoundary } from "./shared/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <ErrorBoundary>
        <Switch>
          <Route exact path="/" component={ListofHeroes} />
          <Route path="/info/:id" component={HeroInfo} />
          <Route path="/comic/:id" component={ComicInfo} />
        </Switch>
      </ErrorBoundary>
    </div>
  );
}

export default App;
