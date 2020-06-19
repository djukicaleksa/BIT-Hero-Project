import React from "react";

import { ComicService } from "../../Services/ComicService";

import "./ComicInfo.css";

class ComicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comic: null };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    new ComicService()
      .fetchAxios(id)
      .then((res) => this.setState({ comic: res.data.results[0] }));
  }
  render() {
    return this.state.comic !== null ? (
      <div className="ComicInfro__wrapper">
        <img
          src={
            this.state.comic.thumbnail.path +
            "." +
            this.state.comic.thumbnail.extension
          }
          alt="ComicImage"
        />
        <h1>{this.state.comic.title}</h1>
        <h4>{this.state.comic.description}</h4>
      </div>
    ) : null;
  }
}
export { ComicInfo };
