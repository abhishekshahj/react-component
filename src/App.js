import React, {Component} from 'react';
import './App.css';
import './child_component'
import ParentComponent from "./parent_component";
import ChildComponent from "./child_component";
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import {Row, Col} from 'react-bootstrap'

const items = [];

items.push(<MenuItem value="Red" key="red" primaryText={`Red`}/>);
items.push(<MenuItem value="Green" key="green" primaryText={`Green`}/>);
items.push(<MenuItem value="Blue" key="blue" primaryText={`Blue`}/>);
items.push(<MenuItem value="Orange" key="orange" primaryText={`Orange`}/>);


class App extends Component {
    constructor(props) {
        super(props);
        this.onUpdate = this.onUpdate.bind(this);
        this.getTestName = this.getTestName.bind(this);
        this.changeText = this.changeText.bind(this);
        this.colorChange = this.colorChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onClickTextBox = this.onClickTextBox.bind(this);
        this.valueChange = this.valueChange.bind(this);
        this.keyPress = this.keyPress.bind(this);

        this.state = {
            name: "",
            testname: "",
            text: 50,
            colorName: "Red",
            flag: false,
            valueOne: "1"
        }
    }

    onUpdate(e) {
        this.setState({
            name: e
        })
    };

    getTestName(value) {
        console.log(value)
        this.setState({
            testname: value
        })
    }

    changeText(a) {
        // console.log(a.traget.value);
        let number = parseInt(a.target.value);
        this.setState({
            text: number
        })
    }

    colorChange(b) {
        this.setState({
            color: b
        })
    }

    handleChange = (event, index, value) => {
        this.setState({colorName: value});
        console.log(value)
    };

    onClickTextBox() {

        this.setState({
            flag:true
        })
    }

    valueChange(e){
        this.setState({
            valueOne:(e.target.value)
        })
    }

    keyPress(event){
        console.log(event.key)
        if(event.key === "Enter"){
            this.setState({
                flag: false
            })
        }
    }

    render() {
        let rows = [];
        for(let i = 0; i<=10; i++){
            rows.push(<div onClick={this.onClickTextBox}  > {this.state.flag ? <input type="text" value={this.state.valueOne} onChange={this.valueChange} onKeyPress={this.keyPress}/> : this.state.valueOne }</div>)
        }

        return (
            <div>

                <center>
                    <div onClick={this.onClickTextBox}  > {this.state.flag ? <input type="text" value={this.state.valueOne} onChange={this.valueChange} onKeyPress={this.keyPress}/> : this.state.valueOne }</div>
                    {/*<div onClick={this.onClickTextBox}>2</div>*/}
                    {/*<div onClick={this.onClickTextBox}>3</div>*/}
                    {/*<div onClick={this.onClickTextBox}>4</div>*/}
                    {/*<div onClick={this.onClickTextBox}>5</div>*/}
                    {/*<div onClick={this.onClickTextBox}>6</div>*/}
                    {/*<div onClick={this.onClickTextBox}>7</div>*/}
                    {/*<div onClick={this.onClickTextBox}>8</div>*/}
                </center>



                <div>
                <ParentComponent passValue={this.onUpdate} size="50px" color="red" text="Abhishek" />
                </div>

                {/*<input type="text" placeholder="Enter Here" readOnly  value={this.state.name} />*/}

                <ChildComponent value={this.state.name} passValue={this.onUpdate} testName={this.getTestName} />

                <div> Show value here - {this.state.testname} </div>

                <b>--------------------------------------------------------------------------------------------------------------------</b>

                <ParentComponent size={this.state.text} name="Abhishek" color={this.state.colorName}/>
                <Row className="show-grid">
                    <Col md={6} sm={6} xs={12} lg={6}>
                        <TextField hintText="Enter Size : " onChange={this.changeText} value={this.state.text}
                                   className="TextBoxWidth"/>
                    </Col>
                    <Col md={6} sm={6} xs={12} lg={6}>
                        <SelectField
                            value={this.state.colorName}
                            onChange={this.handleChange}>
                            {items}
                        </SelectField>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default App;
