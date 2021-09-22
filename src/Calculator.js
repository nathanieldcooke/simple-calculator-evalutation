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

    render() {
        return (
            <div>
                <h1>Result: {this.state.result}</h1>
                <input type='number' value={this.state.num1} onChange={this.handleFirstNum} placeholder="#" />
            </div>
        )
    }
}

export default Calculator