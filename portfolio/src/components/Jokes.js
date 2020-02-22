import React, { Component } from 'react';

const Joke = ({ joke: { setup, punchline } }) => (
    <p style={{ margin: 20 }}>{setup} <em>{punchline}</em></p>
)

class Jokes extends Component{
    state = { joke: {} , jokes: []}

    componentDidMount(){
        fetch('https://official-joke-api.appspot.com/jokes/random')
        .then(res => res.json())
        .then(res => this.setState({joke: res}))
        .catch(err => alert(err))
    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(res => res.json())
        .then(res => this.setState({ jokes: res}))
        .catch(err => alert(err))
    }

    render(){
        return(
            <div>
                <h2>Highlighted Joke</h2>
                {<Joke joke={this.state.joke} />}
                <button onClick={this.fetchJokes}>Fetch Jokes</button>
                {this.state.jokes.map(joke => (<Joke key={joke.id} joke={joke} />))}
            </div>
        )
    }
}

export default Jokes;