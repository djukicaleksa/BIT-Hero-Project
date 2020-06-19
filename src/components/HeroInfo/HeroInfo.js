import React from "react";

import { Comic } from "./Comic/Comic";
import { Switch } from "react-materialize";
import { heroService } from "../../Services/heroService";

import "./HeroInfo.css";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";


class HeroInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroData: null,
      comicInfo: [],
      imgFullScreen: false,
      comicsIsVIsible: false,
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    heroService
      .fetch(id).then((heroData) => this.setState({ heroData }));
  }

  showFullImage = () => {
    this.state.imgFullScreen
      ? this.setState({ imgFullScreen: false })
      : this.setState({ imgFullScreen: true });
  }

  showComics = () => {
    let id = this.props.match.params.id;
    heroService
      .fetchCharComics(id)
      .then((comicDetails) => this.setState({ comicInfo: comicDetails }));
    console.log(this.state.heroData);

    this.state.comicsIsVisible
      ? this.setState({ comicsIsVisible: false })
      : this.setState({ comicsIsVisible: true });
  };

  render() {
    //This if awaits for state to get loaded
    if (this.state.heroData === null) {
      return null;
    }

    return (
      //We use ternar operator to check if we clicked on image, if we clicked imgFUllScreen is set to true and only fullscreen image is rendered
      this.state.imgFullScreen ? (
        <div className="fullscreen">
          <img
            src={this.state.heroData.avatar}
            alt="slika"
            onClick={this.showFullImage}
          />
        </div>
      ) : (
          <div className="infoPage">
            <div className="imgContainer">
              <img
                src={this.state.heroData.avatar}
                alt="slika"
                onClick={this.showFullImage}
              />
            </div>
            <div className="dataContainer">
              <h2>{this.state.heroData.name}</h2>
              <ul>
                <li>Appeared at {this.state.heroData.appears} comic issues</li>
                <li>Last modified {this.state.heroData.modified}</li>
                <a href={this.state.heroData.lastModified}>
                  <li>Find char details here</li>
                </a>
                <a href={this.state.heroData.details}>
                  <li>List of comics</li>
                </a>
              </ul>
            </div>

            {/* <button onClick={this.showComics}>Show Comics</button> */}
            <div className="switch">
              <Switch
                id="Switch-11"
                offLabel="Hide comics"
                onChange={this.showComics}
                onLabel="Show comics"
              />
            </div>

            <ul className="comicList">
              {/**Here we check if comicsIsVIsible is set to true, if it is it will render comics,else it will render nothing */}
              {this.state.comicsIsVisible
                ? this.state.comicInfo.map((comic, i) => {
                  if (comic.images[0] === undefined) {
                    return null;
                  }
                  return (
                    <Comic
                      key={i}
                      id={comic.id}
                      name={comic.title}
                      url={
                        comic.images[0].path + "." + comic.images[0].extension
                      }
                    />
                  );
                })
                : null}
            </ul>
          </div>
        )
    );
  }
}

export { HeroInfo };

//   }
//   componentDidMount() {
//     let id = this.props.match.params.id;
//     new HeroService().fetch(id).then((heroData) => this.setState({ heroData }));
//   }

//   render() {
//     //This if awaits for state to get loaded
//     if (!this.state.heroData) {
//       return null;
//     }

//     const { heroData } = this.state;

//     return (
//       <div className="infoPage">
//         <div className="imgContainer">
//           <img src={heroData.avatar} alt="slika" />
//         </div>
//         <div className="dataContainer">
//           <h2>{this.state.heroData.name}</h2>
//           <ul>
//             <li>
//               Appeared at {this.state.heroData.comics.available} comic issues
//             </li>
//             <li>Last modified {this.state.heroData.modified}</li>
//             <a href={this.state.heroData.urls[1].url}>
//               <li>Find char details here</li>
//             </a>
//             <a href={this.state.heroData.urls[0].url}>
//               <li>List of comics</li>
//             </a>
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

// export { HeroInfo };
