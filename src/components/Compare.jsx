import React, { Component } from 'react'

export default class Compare extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <h2>{/*title*/}</h2>
                <div class="timer">{/*timer*/}</div>
                <p>Progress: Round {} of {}</p>
                <div>
                    <div class="option">

                    </div>
                    <h3>VS</h3>
                    <div class="option">

                    </div>
                </div>
            </div>
        )
    }
}