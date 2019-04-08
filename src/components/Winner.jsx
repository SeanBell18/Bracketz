import React, {Component} from 'react'

export default class Winner extends Component {
    constructor() {
        super()
    }
    home = () => {

    }
    render() {
        return(
            <div>
                <div>
                    <h3>Your winner is</h3>
                    <h1>{}</h1>
                </div>
                <div>
                    <button onClick={this.home}>Home</button>
                </div>
            </div>
        )
    }
}