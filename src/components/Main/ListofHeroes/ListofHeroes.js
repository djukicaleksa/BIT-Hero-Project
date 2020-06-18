import React from "react";
import { HeroService } from "../../../Services/HeroService";
import { fetchAllSearches } from "../../../Services/SearchServices";
import { Hero } from "../Hero/Hero";
import { Search } from "../../Serach/Serach";
import "./ListofHeroes.css";

class ListofHeroes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { heroes: [], serchedHero: null };
  }
  componentDidMount() {
    new HeroService()
      .fetchAll()
      .then((data) => this.setState({ heroes: data.data.results }));
  }
  getSearchedHero = (event) => {
    if (event.target.value) {
      new HeroService()
        .search(event.target.value)
        .then((res) =>
          res.data.results.length !== 0
            ? this.setState({ serchedHero: res.data.results })
            : null
        );
    }
    if (event.target.value === "") {
      this.setState({ serchedHero: null });
      new HeroService()
        .fetchAll()
        .then((data) => this.setState({ heroes: data.data.results }));
    }
  };

  render() {
    return (
      <div>
        <input
          type="search"
          placeholder="Enter heroes name...."
          onChange={this.getSearchedHero}
          className="ListofHeroes__searchField"
        />
        {this.state.serchedHero !== null ? (
          this.state.serchedHero.map((item) => (
            <Search
              id={item.id}
              name={item.name}
              image={item.thumbnail.path + "." + item.thumbnail.extension}
            />
          ))
        ) : (
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
        )}
        ;
      </div>
    );
  }
}
export { ListofHeroes };
