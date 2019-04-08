import React, { Component } from 'react'

export default class ProofReading extends Component {
    constructor() {
        super()
        this.state = {
            input: '',
            inRoom: []
        }
    }
    componentDidMount = () => {
        //socket gets input and updates values
    }
    handleInput = (e) => {
        this.setState({ input: e.target.value })
    }
    handleSubmit = (e) => {
        //send input to socket
    }
    render() {
        return (
            <div>
                <h1>{/*title of bracket*/}</h1>
                <h3>Room Code: {/*insert room code */}</h3>
                <h6>Inputs: {}</h6><h6>Rounds: {}</h6>
                <div>
                    <h3>People in room:</h3>
                    {this.state.inRoom.map(person => {
                        return (
                            <p>{person.name}</p>
                        )
                    })}
                </div>
                <h6>Create an option:</h6>
                <input
                    type="text"
                    onChange={this.handleInput}
                    value={this.state.input}
                    placeholder='New Option' /><button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}