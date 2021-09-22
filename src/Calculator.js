import React from 'react';

class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: 0,
            num1: '',
            num2: '',
        }
    }

    handleFirstNum = e => {
        const num = Number(e.target.value) ? Number(e.target.value) : "";
        this.setState({num1: num});
    }

    handleSecondNum = e => {
        const num = Number(e.target.value) ? Number(e.target.value) : "";
        this.setState({ num2: num });
    }

    sum = () => {
        this.setState({ result: this.state.num1 + this.state.num2 });
    }

    subtract = () => {
        this.setState({ result: this.state.num1 - this.state.num2 });
    }

    multiply = () => {
        this.setState({ result: this.state.num1 * this.state.num2 });
    }

    divide = () => {
        this.setState({ result: this.state.num1 / this.state.num2 });
    }

    clearInput = () => {
        this.setState({
            result: 0, 
            num1: '', 
            num2: ''
        })
    }

    render() {
        const {num1, num2, result} = this.state

        return (
            <div>
                <h1>Result: {result}</h1>
                <input type='number' value={num1} onChange={this.handleFirstNum} placeholder="#" />
                <input type='number' value={num2} onChange={this.handleSecondNum} placeholder="#" />
                <button onClick={this.sum} >+</button>
                <button onClick={this.subtract} >-</button>
                <button onClick={this.multiply} >*</button>
                <button onClick={this.divide} >/</button>
                <button onClick={this.clearInput} >clear</button>
            </div>
        );
    };
};

export default Calculator