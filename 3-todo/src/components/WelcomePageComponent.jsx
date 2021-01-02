import React, {Component} from "react";
import '../App.css';

class WelcomePageComponent extends Component {
    render() {

        return <div>
            <h1>
                Welcome <span className="temporary-style"> {this.props.match.params.name}</span>


            </h1>
        </div>
    }
}


export default WelcomePageComponent