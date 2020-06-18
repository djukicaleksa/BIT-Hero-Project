import React from 'react';
import { TeamMember } from '../TeamMember/TeamMember';

class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = { teamMembers: null }
    }
    
    render() {
 
        return <ul>
            {this.state.teamMembers.map((member, i) => {
                return <TeamMember key={i} url={this.teamMembers.url} name={this.teamMembers.name}/>
            })}
        </ul>
    }

}

