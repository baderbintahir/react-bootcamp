import React, { Component } from 'react'

const TITLES = [
    'a software engineer',
    'a music lover',
    'an enthusiastic learner',
    'an adventure seeker'
]

class Title extends Component{
    state = { titleIndex: 0, fadeIn: true }

    componentDidMount(){
        this.timeOut = setTimeout(() => this.setState({ fadeIn: false }), 2000)
        this.animateTitle();
    }

    componentWillUnmount(){
        clearTimeout(this.timeOut)
        clearInterval(this.titleInterval)
    }

    animateTitle = () => {
       this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length            
            this.setState({ titleIndex, fadeIn: true })
            this.timeOut = setTimeout(() => this.setState({ fadeIn: false }), 2000)
        }, 4000)
    }

    render(){
        const { fadeIn, titleIndex } = this.state

        const title = TITLES[titleIndex]

        return(
        <p className = { fadeIn ? 'title-fade-in' : 'title-fade-out' }>I am {title}</p>
        )
    }
}

export default Title