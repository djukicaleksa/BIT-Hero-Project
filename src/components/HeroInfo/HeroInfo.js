import React from 'react';
import { fetchById } from '../../Services/HeroesServices';

class HeroInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { heroData: {} }
    }
    componentDidMount() {
        fetchById('3').then(res => this.setState({ heroData: res.data.results }))
    }

    render() {
        return <div >
            <div className='imgContainer'>

            </div>
            <div className='dataContainer'>
                <ul>
                    {console.log(this.state.heroData)}
                </ul>

            </div>
        </div>
    }

}

export { HeroInfo };