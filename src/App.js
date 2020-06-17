import React from "react";

import { Header } from "./components/Header/Header";
import { ListofHeroes } from "./components/Main/ListofHeroes";
import { HeroInfo } from './components/HeroInfo/HeroInfo';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <ListofHeroes /> */}
      <HeroInfo />
    </div>
  );
}

export default App;
