import React, {Component} from "react";
import './Calculator.css'

class CalculatorComponent extends Component {


constructor() {
    super();
    this.state={
        sum:0

    }
}


    render() {
        return (
            <div className="calculatorComponent">

                <button onClick={this.calculate}>+1</button>
                <span className="result">{this.state.sum}</span>

            </div>
        )
    }

    calculate(){
        console.log("calculate")
    }
}

export default CalculatorComponent;