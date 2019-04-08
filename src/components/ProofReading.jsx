import React, { Component } from 'react'

export default class ProofReading extends Component {
    constructor() {
        super()
    }
    remove = () => {

    }
    start = () => {
        
    }
    render() {
        return(
            <div>
                <p>Options:</p>
                <div>
                    {this.state.list.map(option => {
                        return (
                            <div>
                                <p>{option}</p>
                                <button onClick={this.remove}>X</button>
                            </div>
                        )
                    })}
                </div>
                <p>Rounds: {/*Total options - 1*/}</p>
                <button onClick={this.start}>Ready!</button>
            </div>
        )
    }
}