import React from "react";
import { heroService } from "../../../Services/HeroService";
import { Hero } from "../Hero/Hero";
import { Search } from "../../Serach/Serach";
import { TeamMember } from "../TeamMember/TeamMember";
import "./ListofHeroes.css";

class ListofHeroes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { heroes: [], serchedHero: null, teamMembers: [] };
  }
  componentDidMount() {
    heroService
      .fetchAll()
      .then((data) => this.setState({ heroes: data.data.results }));
  }
  getSearchedHero = (event) => {
    if (event.target.value) {
      heroService
        .search(event.target.value)
        .then((res) =>
          res.data.results.length !== 0
            ? this.setState({ serchedHero: res.data.results })
            : null
        );
    }
    if (event.target.value === "") {
      this.setState({ serchedHero: null });
      heroService
        .fetchAll()
        .then((data) => this.setState({ heroes: data.data.results }));
    }
  };
  addMember = (id, key) => {
    localStorage.setItem()
    this.state.heroes.map(hero => {
      if (id === hero.id && !this.state.teamMembers.includes(hero)) {
        // this.state.teamMembers.push(hero)
        this.setState({ teamMembers: [...this.state.teamMembers, hero] })
      }
    }
    )
  }
  removeMember = (id, key) => {
    console.log(id);
    let prevMembers = this.state.teamMembers;
    let newMembers = prevMembers.filter(member => member.id !== id);
    this.setState({ teamMembers: newMembers });

  }

  render() {
    return (
      <div className="Container" >
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
                    addMember={this.addMember}
                  />
                ))}
              </div>
            )}
          ;
      </div>
        <div className='team'>
          <h1>My Team</h1>
          {this.state.teamMembers.map((member, i) => <TeamMember key={i} removeMember={this.removeMember} id={member.id} url={`${member.thumbnail.path}.${member.thumbnail.extension}`} name={member.name}></TeamMember>)}
        </div>
      </div>
    );
  }
}
export { ListofHeroes };
