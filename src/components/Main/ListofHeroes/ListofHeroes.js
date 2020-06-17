import React from "react";
import { fetchAll } from "../../../Services/HeroesServices";
import { Hero } from "../Hero/Hero";
import "./ListofHeroes.css";

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
      <div className="ListofHeroes__wrapper">
        {this.state.heroes.map((item) => (
          <Hero
            name={item.name}
            image={item.thumbnail.path + "." + item.thumbnail.extension}
          />
        ))}
      </div>
    );
  }
}

export { ListofHeroes };
