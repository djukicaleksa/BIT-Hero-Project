import React from "react";
import { HeroService } from "../../Services/HeroService";

import "./HeroInfo.css";

class HeroInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { heroData: null };
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    new HeroService().fetch(id).then((heroData) => this.setState({ heroData }));
  }

  render() {
    //This if awaits for state to get loaded
    if (!this.state.heroData) {
      return null;
    }

    const { heroData } = this.state;

    return (
      <div className="infoPage">
        <div className="imgContainer">
          <img src={heroData.avatar} alt="slika" />
        </div>
        <div className="dataContainer">
          <h2>{this.state.heroData.name}</h2>
          <ul>
            <li>
              Appeared at {this.state.heroData.comics.available} comic issues
            </li>
            <li>Last modified {this.state.heroData.modified}</li>
            <a href={this.state.heroData.urls[1].url}>
              <li>Find char details here</li>
            </a>
            <a href={this.state.heroData.urls[0].url}>
              <li>List of comics</li>
            </a>
          </ul>
        </div>
      </div>
    );
  }
}

export { HeroInfo };
