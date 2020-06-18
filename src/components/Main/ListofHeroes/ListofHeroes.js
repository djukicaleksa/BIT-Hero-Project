import React from "react";

import { Hero } from "../Hero/Hero";
import { Search } from "../../Serach/Serach";
import { HeroService } from "../../../Services/HeroService";

import "./ListofHeroes.css";

class ListofHeroes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
      serchedHero: null,
      teamMembers: []
    };
  }

  componentDidMount() {
    new HeroService()
      .fetchAll()
      .then((data) => this.setState({ heroes: data.data.results }));
  }

  getSearchedHero = (event) => {
    if (event.target.value) {
      if (event.keyCode === 13) {
        new HeroService().search(event.target.value).then((res) =>
          res.data.results.length !== 0
            ? this.setState({ serchedHero: res.data.results[0] })
            : null
        );
      }
    }
  };

  addToTeam = id => {
    console.log(id);
    for (let i = 0; i < this.state.teamMembers.length; i++) {
      if (id === this.state.teamMembers[i].id) {
        continue
      }

      this.state.heroes.map((hero, i) => {
        if (hero.id === id) {
          this.state.teamMembers.push(hero);
        }
      })

    }
  }
  render() {
    return (
      <div>
        <input
          type="search"
          placeholder="Enter heroes name...."
          onKeyDown={this.getSearchedHero}
          className="ListofHeroes__searchField"
        />
        {this.state.serchedHero !== null ? (
          <Search
            id={this.state.serchedHero.id}
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
              addMember={this.addToTeam}
            />
          ))}
        </div>
      </div>


    );
  }
}

export { ListofHeroes };
