import React, {Component} from "react";


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

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "topuser",
            password: "123"
        }
    }

    render() {
        return (
            <div>

                Username: <input type="text" name="username"
                                 value={this.state.username}
                                 onChange={this.handleUsernameChange}/>
                Password: <input type="text"
                                 name="password"
                                 value={this.state.password}
                                 onChange={this.handlePasswordChange}/>
                <button>Login</button>
            </div>
        )
    }

    handleUsernameChange(event) {
        console.log(event)
    }

    handlePasswordChange(event) {
        console.log(event)

    }
}

export default TodoComponent