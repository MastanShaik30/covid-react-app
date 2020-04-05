import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import homepic from '../img/Corona.jpg';



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={homepic} className="homepic"></img>
            <ReactTypingEffect className="typingeffect" text={['Covid Data']} speed={100} eraseDelay={400}/>
            </div>
            )
        }
    }
    
    export default Home
    