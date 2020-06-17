import React from "react";
import { Header } from "./components/Header/Header";
import { HeroInfo } from "./components/HeroInfo/HeroInfo";
import { ListofHeroes } from "./components/Main/ListofHeroes/ListofHeroes";

function App() {
  return (
    <div className="App">
      <Header />
      <ListofHeroes />
      <HeroInfo />
    </div>
  );
}

export default App;
