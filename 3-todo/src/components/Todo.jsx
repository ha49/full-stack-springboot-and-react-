import React, {Component} from "react";
import LoginComponent from "./LoginComponent";
import WelcomePageComponent from "./WelcomePageComponent";

class TodoComponent extends Component {

    render() {
        return (
            <div>
                <LoginComponent/>
                <WelcomePageComponent/>
            </div>
        )
    }

}


export default TodoComponent