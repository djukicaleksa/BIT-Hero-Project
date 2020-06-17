import React from "react";
import { fetchAll } from "../../Services/HeroesServices";
import { Hero } from "./Hero";

class ListofHeroes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { heroes: [] };
  }
  componentDidMount() {
    fetchAll().then((data) => this.setState({ heroes: data.data.results }));
  }

  render() {
    return (
      <div>
        {<Hero />}
        {console.log(this.state.heroes)}
      </div>
    );
  }
}

export { ListofHeroes };
