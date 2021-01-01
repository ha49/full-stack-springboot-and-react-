import React, {Component} from "react";

class WelcomePageComponent extends Component {
    render() {

        return <div>

            Welcome {this.props.match.params.name} </div>

    }
}


export default WelcomePageComponent