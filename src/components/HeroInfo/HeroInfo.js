import React from 'react';
import { fetchById } from '../../Services/HeroesServices';

import './HeroInfo.css'

class HeroInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { heroData: [] }
    }
    componentDidMount() {
        fetchById('3').then(res => this.setState({ heroData: res.data.results[0] }))
    }

    render() {
        //This if awaits for state to get loaded
        if (this.state.heroData.comics === undefined) {
            return null
        }
        return <div className='infoPage'>
            <div className='imgContainer'>

                {this.state.heroData.id !== undefined
                    ? <img src={this.state.heroData.thumbnail.path + "." + this.state.heroData.thumbnail.extension} alt="slika" />
                    : null
                }
            </div>
            <div className='dataContainer'>
                <h2>{this.state.heroData.name}</h2>
                <ul>
                    {console.log(this.state.heroData)}
                    <li>Appeared at {this.state.heroData.comics.available} comic issues</li>
                    <li>Last modified {this.state.heroData.modified}</li>
                    <a href={this.state.heroData.urls[1].url}><li>Find char details here</li></a>
                    <a href={this.state.heroData.urls[0].url}><li>List of comics</li></a>

                </ul>

            </div>
        </div>
    }

}

export { HeroInfo };