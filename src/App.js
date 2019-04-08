import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Compare from './components/Compare'
import Create from './components/Create'
import LandingPage from './components/LandingPage'
import Login from './components/Login'
import ProofReading from './components/ProofReading'
import WaitingRoom from './components/WaitingRoom'
import Winner from './components/Winner'
import io from 'socket.io-client'

// const socket = io(process.env.REACT_SOCKET)

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          {/* <Route path='/compare' render={(props) => <Compare socket={socket}{...props} />} />
          <Route path='/create' render={(props) => <Create socket={socket}{...props} />} />
          <Route path='/landing-page' render={(props) => <LandingPage socket={socket}{...props} />} /> */}
          <Route exact path='/' render={() => <Login/>} />
          {/* <Route path='/proof-reading' render={(props) => <ProofReading socket={socket}{...props} />} />
          <Route path='/waiting-room' render={(props) => <WaitingRoom socket={socket}{...props} />} />
          <Route path='/winner' render={(props) => <Winner socket={socket}{...props} />} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
