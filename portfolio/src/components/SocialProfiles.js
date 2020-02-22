import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

const SocialProfile = props => {
    const { link, image } = props.socialProfiles;
    return (
        <a href={link}>
            <img src={image} style={{ height: 35, width: 35, margin: 5 }} alt='social profile'></img>
        </a>
    )
}


const SocialProfiles = () => (
    <div>
        <h2>Connect with me</h2>
        {
            SOCIAL_PROFILES.map(SOCIAL_PROFILE => (
                <SocialProfile key={SOCIAL_PROFILE.id} socialProfiles={SOCIAL_PROFILE} />
            ))
        }
    </div>
)

export default SocialProfiles;
