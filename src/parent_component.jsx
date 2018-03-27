import React, { Component } from 'react';
import './App.css';
import './App'


class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
        this.state = {
            name: "Abhi",
            inr: "500",
            size : props.size
        }
    }

    update(e) {
        this.setState({
            name: e.target.value

        })
        if (!!this.props.passValue){
            this.props.passValue(e.target.value);
        }
        if(!!this.props.inr){
            this.props.inr(this.state.inr)
        }
    }

    render() {
        return (
            <div>
                {/*<input type="text" placeholder="Enter Here" onChange={this.update} value={this.props.name}  style={{fontSize: this.state.size, color: this.props.color}} />*/}
                <input type="text" placeholder="Enter Here" onChange={this.update} value={this.props.name}  style={{fontSize: this.props.size, color: this.props.color, width: "100%"}} />
            </div>
        );
    }
}

export default ParentComponent;
