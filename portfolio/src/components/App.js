import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles'
import Title from './Title'
import profile from '../assets/profile.png'

class App extends Component{

    state = { displayBio: false}

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render(){
        return(
            <div>
                <img src={profile} alt='profile' className='profile' />
                <h1>Hello!</h1>
                <p>My name is Bader.</p>
                <Title /> 
                <p>I am always looking forward to the new projects.</p>                
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Rahim Yar Khan and code everyday.</p>
                            <p>Other than coding I like music.</p>
                            <button onClick={this.toggleDisplayBio}>Show Less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read More</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App