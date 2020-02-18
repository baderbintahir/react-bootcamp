import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component{
    render(){
        const { link, image } = this.props.socialProfiles;
        return(
            <a href={link}>
                <img src={image} style = {{height: 35, width: 35, margin: 5}} alt = 'social profile'></img>
            </a>
        )
    }
}

class SocialProfiles extends Component{
    render(){
        return(
            <div>
                <h2>Connect with me</h2>
                {
                    SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                        return <SocialProfile key={SOCIAL_PROFILE.id} socialProfiles={SOCIAL_PROFILE}/>
                    })
                }
            </div>
        )
    }
}

export default SocialProfiles;

//link image