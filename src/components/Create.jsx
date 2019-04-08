import React, {Component} from 'react'

export default class Create extends Component {
    constructor() {
        super()
        this.state = {
            bracketName: '',
            personal: true,
            maxOptions: false,
            maxOptionsNum: 0,
            inputLimit: false,
            inputLimitNum: 0,
            timer: false
        }
    }
    handleInputs= (e) => {
        console.log(e.target.value)
        this.setState({[e.target.name]: !this.state[e.target.name]})
    }
    handleOtherInputs = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        console.log(this.state)
        //introduction and explanation
        let intro = 
            <div>
                <h2>Create a bracket!</h2>
                <p>A bracket will be made up multiple options that will be voted against each other 2 at a time</p>
            </div>

        let title = 
            <div>
                <p>What is the title of your bracket?</p>
                <input type="text" name='bracketName' value={this.state.bracketName} placeholder='Bracket Title' onChange={this.handleOtherInputs}/>
            </div>
        //conditional rendering for options

        //first condition
        let q1 = <div></div>
        if (this.state.personal) {
            q1 =
            <div>
                <p>Personal or Group?</p>
                <input type="Radio" name="personal" value={true} checked />Personal
                <input type="Radio" name="personal" value={false} onClick={this.handleInputs}/>Group
            </div>
        } else {
            q1 =
            <div>
                <p>Personal or Group?</p>
                <input type="Radio" name="personal" value={true} onClick={this.handleInputs}/>Personal
                <input type="Radio" name="personal" value={false} checked />Group
            </div>
        }

        //second condition
        let q2 = <div></div>
        if (this.state.maxOptions) {
            q2 = 
            <div>
                <p>Is there a max number of options? If so, how many?</p>
                <input type="Radio" name="maxOptions" value={true} checked onClick={this.handleInputs}/>Yes
                <input type="Radio" name="maxOptions" value={false} onClick={this.handleInputs}/>No
                <input type="number" name="maxOptionsNum" value = {this.state.maxOptionsNum} onChange={this.handleOtherInputs}/>
            </div>
        } else {
            q2 = 
            <div>
                <p>Is there a max number of options? If so, how many?</p>
                <input type="Radio" name="maxOptions" value={true} onClick={this.handleInputs}/>Yes
                <input type="Radio" name="maxOptions" value={false} checked onClick={this.handleInputs}/>No
            </div>
        }
        //third condition
        let q3 = <div></div>
        if (!this.state.personal && !this.state.inputLimit) {
            q3 =
            <div>
                <p>Is there a limit to how many inputs each user can make?</p>
                <input type="Radio" name="inputLimit" value={true} onClick={this.handleInputs}/>Yes
                <input type="Radio" name="inputLimit" value={false} checked onClick={this.handleInputs}/>No
            </div>
        } else if (!this.state.personal && this.state.inputLimit){
            q3 =
            <div>
                <p>Is there a limit to how many inputs each user can make?</p>
                <input type="Radio" name="inputlimit" value={true} checked onClick={this.handleInputs}/>Yes
                <input type="Radio" name="inputlimit" value={false} onClick={this.handleInputs}/>No
                <input type="number" name="inputLimitNum" value={this.state.inputLimitNum} onChange={this.handleOtherInputs}/>
            </div>
        }
        let time = <div></div>
        if (this.state.timer) {
            time= 
            <div>
                <p>Would you like to have a timer for bracket choices?</p>
                <input type="Radio" name="timer" value={true} checked />Yes
                <input type="Radio" name="timer" value={false} onClick={this.handleInputs}/>No
                <select>
                    <option value="15">15 seconds</option>
                    <option value="30">30 seconds</option>
                    <option value="45">45 seconds</option>
                    <option value="60">60 seconds</option>
                </select>
            </div>
        } else {
            time= 
            <div>
                <p>Would you like to have a timer for bracket choices?</p>
                <input type="Radio" name="timer" value={true} onClick={this.handleInputs}/>Yes
                <input type="Radio" name="timer" value={false} checked />No
            </div>
        }
        return(
            <div>
                {intro}
                {title}
                {this.state.bracketName}
                {q1}
                {q2}
                {q3}
                {time}
            </div>
        )
    }
}