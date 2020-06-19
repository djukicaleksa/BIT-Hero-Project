import React from "react";

import { Comic } from "./Comic/Comic";
import { HeroInfoFS } from "./HeroInfoFS";
import { Switch } from "react-materialize";
import { HeroInfoNormal } from "./HeroInfoNormal";
import { ComicInfo } from "../ComicInfo/ComicInfo";
import { heroService } from "../../Services/HeroService";


import style from "./HeroInfo.module.css";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import { Modal, Button } from 'react-materialize';
import { ComicService } from "../../Services/ComicService";

class HeroInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroData: null,
      comicInfo: [],
      imgFullScreen: false,
      comicsIsVIsible: false,
      showModal: false,
      comic: []
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    heroService
      .fetch(id).then((heroData) => this.setState({ heroData }));
  }

  showFullImage = () => {
    this.state.imgFullScreen
      ? this.setState({ imgFullScreen: false })
      : this.setState({ imgFullScreen: true });
  }

  showComics = () => {
    const id = this.props.match.params.id;
    heroService
      .fetchCharComics(id)
      .then((comicDetails) => this.setState({ comicInfo: comicDetails }));
    console.log(this.state.heroData);

    this.state.comicsIsVisible
      ? this.setState({ comicsIsVisible: false })
      : this.setState({ comicsIsVisible: true });
  };

  showModal = (event) => {
    //THis is the correct way of writing this because fetch is async
    const id = event.currentTarget.getAttribute('data-id');

    new ComicService()
      .fetchAxios(id)
      .then((res) => {
        this.setState((currentState) => ({
          comic: res.data.results[0],
          showModal: !currentState.showModal
        }))
      });
  }

  render() {
    //This if awaits for state to get loaded
    if (this.state.heroData === null) {
      return null;
    }

    return (

      this.state.showModal ? <div>

        <Modal
          actions={[
            <Button flat modal="close" node="button" waves="green" onClick={() => { this.setState({ showModal: false }) }}>Close</Button>
          ]}
          bottomSheet={false}
          fixedFooter={false}
          header="Modal Header"
          id="modal1"
          open={true}
          options={{
            dismissible: true,
            endingTop: '10%',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            opacity: 0.5,
            outDuration: 250,
            preventScrolling: true,
            startingTop: '4%'
          }}
        >
          <div>
            <img src={this.state.comic.images[0].path + '.' + this.state.comic.images[0].extension} alt='oops'></img>
          </div>

        </Modal>
      </div> :
        //We use ternar operator to check if we clicked on image, if we clicked imgFUllScreen is set to true and only fullscreen image is rendered
        this.state.imgFullScreen ? (

          <HeroInfoFS avatar={this.state.heroData.avatar} showFullImage={this.showFullImage}></HeroInfoFS>
        ) : (
            <div className={style.infoPage}>

              <HeroInfoNormal
                avatar={this.state.heroData.avatar}
                showFullImage={this.showFullImage}
                name={this.state.heroData.name}
                appears={this.state.heroData.appears}
                modified={this.state.heroData.modified}
                lastModified={this.state.heroData.lastModified}
                details={this.state.heroData.details}>
              </HeroInfoNormal>

              <div className={style.switch}>
                <Switch
                  id="Switch-11"
                  offLabel="Hide comics"
                  onChange={this.showComics}
                  onLabel="Show comics"
                />
              </div>

              <ul className={style.comicList}>
                {/**Here we check if comicsIsVIsible is set to true, if it is it will render comics,else it will render nothing */}
                {this.state.comicsIsVisible
                  ? this.state.comicInfo.map((comic, i) => {
                    if (comic.images[0] === undefined) {
                      return null;
                    }
                    console.log(comic);

                    return (
                      <Comic
                        key={i}
                        id={comic.id}
                        name={comic.title}
                        url={comic.images[0].path + "." + comic.images[0].extension}
                        showModal={this.showModal}
                      />
                    );
                  })
                  : null}
              </ul>
            </div >
          )
    );
  }
}

export { HeroInfo };

