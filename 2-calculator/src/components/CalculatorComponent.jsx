import React, {Component} from "react";
import './Calculator.css'

class CalculatorComponent extends Component {


    constructor() {
        super();
        this.state = {
            sum: 0,
            sum2: 0

        }
        this.calculate = this.calculate.bind(this)
    }

    render() {
        return (
            <div className="calculatorComponent">

                <button onClick={this.calculate}>+1</button>
                <span className="result">{this.state.sum}</span>
                <span className="result">{this.state.sum2}</span>

            </div>
        )
    }

    calculate() {

        this.setState(
            {
                sum: this.state.sum +1,
                sum2: this.state.sum2 +1

            }
            )
        console.log("sum:"+(this.state.sum+1))
    }
}

export default CalculatorComponent;