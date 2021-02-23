import logo from './muka.png';
import './App.css';
import { Component } from 'react';
import Fart from "./audioclips/clip2.mp3";
import {Howl, Howler} from "howler";
const AudioClips = [
  {sound: Fart, label: 'Fart'}
]

class App extends Component {
  SoundPlay = (src) => {
    const sound = new Howl({
      src
    })
    sound.play();
  }

  RenderButtonAndSound = () => {
    return AudioClips.map((soundObj, index) =>{
      return(
        <div> <img className="App-logo"src={logo} alt="tite" onClick={() => this.SoundPlay(soundObj.sound)} /> </div>
      )
    })
  }
  render(){
    Howler.volume(1.0);
    return<div id="App-header">
      {this.RenderButtonAndSound()}
      <p>pls don't press XD
      </p>
      
      <p id="copyright">&copy; Copyright <strong>Adrian De Vera</strong>.<br /> All Rights Reserved</p>
      
    </div>
  }
}

export default App;
