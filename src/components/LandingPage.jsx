import React, {Component} from 'react'

export default class LandingPage extends Component {
    constructor() {
        super()
        this.state ={
            usertype: false,
            roomCode: 0,
            guestUsername: '',
            rooms: []
        }
    }
    logout = () => {

    }
    handleInputs = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    create = () => {

    }
    join = () => {
        
    }
    render() {
        return(
            <div>
                <h1>Welcome!</h1>
                <button onClick={this.create}>Create a New Bracket</button>
                <h3>OR</h3>
                <p>Enter room code</p>
                <input type="number" value={this.state.roomCode} onChange={this.handleInputs}/>
                <button onClick={this.join}>Join</button>
            </div>
        )
    }
}