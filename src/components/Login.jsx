import React, { Component } from 'react';
//import axios from 'axios';

export default class Login extends Component {
    constructor() {
        super()

        this.state = {
            username: "",
            password: "",
            guestName: ""
        }
    }
    login = () => {
        const user = {
            username: this.state.uername,
            password: this.state.password
        };
        const { username, password } = user
        if (username && password) {
            // axios
            //     .post('/auth/login', user)
            //     .then(res => {
            //         const user = res.data
            //         if (user.user_id) {
            //             //connect to hooks in order to keep track of user
            //         }
            //     })
            //     .catch(err => {
            //         alert(err.response.request.response)
            //         console.log(`Error: ${err.response.request}`)
            //     })
        } else if (!username) {
            alert('Please enter a username')
        } else if (!password) {
            alert(`Please enter a password`)
        }
    }
    guestLogin = () => {
        if (this.state.guestName) {
            //connect to hooks in order to keep track of username
            //change to landingpage
        } else {
            alert('Guest name cannot be empty')
        }
    }
    handleInputs = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleQuickStart = () => {

    }
    render() {
        return (
            <div>
                <div>
                    <h3>Log in</h3>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.state.handleInputs}
                    />
                    <input
                        type="text"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.state.handleInputs}
                    />
                    <button onClick={this.state.login}>Login</button>
                </div>
                <div>
                    <h3>Play as Guest</h3>
                    <input 
                    type="text"
                    name="guestName"
                    placeholder="Guest Name"
                    value={this.state.guestName}
                    onChange={this.state.handleInputs}
                />
                </div>
                <div>
                    <p>Have a quick idea you want to work out yourself? Or just want to do a run through to better understand? 
                        Try our Quick start!</p>
                    <button onClick={this.handleQuickStart}>Quick Start</button>
                </div>
            </div>
        )
    }
}