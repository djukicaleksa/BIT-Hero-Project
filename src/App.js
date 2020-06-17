import React from "react";
import { Header } from "./components/Header/Header";
import { ListofHeroes } from "./components/Main/ListofHeroes/ListofHeroes";

function App() {
  return (
    <div className="App">
      <Header />
      <ListofHeroes />
    </div>
  );
}

export default App;
