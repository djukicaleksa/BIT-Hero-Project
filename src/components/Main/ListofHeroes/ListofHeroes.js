import React from "react";
import { fetchAll } from "../../../Services/HeroesServices";
import { fetchAllSearches } from "../../../Services/SearchServices";
import { Hero } from "../Hero/Hero";
import "./ListofHeroes.css";
import { Search } from "../../Serach/Serach";

class ListofHeroes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { heroes: [], serchedHero: null };
  }
  componentDidMount() {
    fetchAll().then((data) => this.setState({ heroes: data.data.results }));
  }
  getSearchedHero = (event) => {
    if (event.keyCode === 13) {
      fetchAllSearches(event.target.value).then((res) =>
        this.setState({ serchedHero: res.data.results[0] })
      );
    }
  };

  render() {
    return (
      <div>
        <input
          type="search"
          placeholder="Enter heroes name...."
          onKeyDown={this.getSearchedHero}
        />
        {this.state.serchedHero !== null ? (
          <Search
            name={this.state.serchedHero.name}
            image={
              this.state.serchedHero.thumbnail.path +
              "." +
              this.state.serchedHero.thumbnail.extension
            }
          />
        ) : null}
        <div className="ListofHeroes__wrapper">
          {this.state.heroes.map((item, i) => (
            <Hero
              key={i}
              name={item.name}
              image={item.thumbnail.path + "." + item.thumbnail.extension}
              id={item.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export { ListofHeroes };
