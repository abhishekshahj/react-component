import React, { Component } from 'react';
import './App.css';
import './App'

class ChildComponent extends Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
        this.getTestNameHere = this.getTestNameHere.bind(this);
        this.state = {
            name: "",
            testName : "ssdfsfsfsfff"
        }
    }

    update(e) {
        this.setState({
            name: e.target.value

        })
        if (!!this.props.passValue) {
            this.props.passValue(e.target.value);
        }
    };

    getTestNameHere() {
        if (!!this.props.testName) {
            this.props.testName(this.state.testName)
        }
    }

    render() {
        return (
            <div>
                <div onClick={this.getTestNameHere}> test </div>
                <br/>
                <input type="text" placeholder="Enter Here" onChange={this.update} value={this.props.value} />
            </div>
        );
    }
}

export default ChildComponent;
