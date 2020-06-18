import React from "react";
import { fetchById, fetchCharComics } from "../../Services/HeroesServices";
import { Comic } from './ComicList/Comic'
import { Switch } from 'react-materialize';
import 'materialize-css/dist/js/materialize.js'
import 'materialize-css/dist/css/materialize.css'
import "./HeroInfo.css";

class HeroInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { heroData: [], comicsIsVisible: false, comicInfo: [] };
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    fetchById(id).then((res) =>
      this.setState({ heroData: res.data.results[0] })
    );
  }
  showComics = () => {
    let id = this.props.match.params.id;
    fetchCharComics(id).then(comicDetails => this.setState({ comicInfo: comicDetails }));
    console.log(this.state.heroData);

    this.state.comicsIsVisible ? this.setState({ comicsIsVisible: false }) : this.setState({ comicsIsVisible: true })
  }

  render() {
    //This if awaits for state to get loaded
    if (this.state.heroData.comics === undefined) {
      return null;
    }
    return (
      <div className="infoPage">
        <div className="imgContainer">
          {this.state.heroData.id !== undefined ? (
            <img
              src={
                this.state.heroData.thumbnail.path +
                "." +
                this.state.heroData.thumbnail.extension
              }
              alt="slika"
            />
          ) : null}
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

        {/* <button onClick={this.showComics}>Show Comics</button> */}
        <div className='switch'>
          <Switch
            id="Switch-11"
            offLabel="Hide comics"
            onChange={this.showComics}
            onLabel="Show comics"
          />
        </div>

        <ul className='comicList'>
          {/**Here we check if comicsIsVIsible is set to true, if it is it will render comics,else it will render nothing */}
          {this.state.comicsIsVisible ? this.state.comicInfo.map((comic, i) => {
            return (
              <Comic key={i} name={comic.title} url={comic.images[0].path + '.' + comic.images[0].extension} />
            )
          }) : null}</ul>

      </div>
    );
  }
}

export { HeroInfo };
