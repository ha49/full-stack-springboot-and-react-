import React, {Component} from "react";
import LoginComponent from "./LoginComponent";

class TodoComponent extends Component {

    render() {
        return (
            <div>
                Hello Todo App.<br/>
                This is todo component
                <LoginComponent/>
            </div>
        )
    }

}


export default TodoComponent