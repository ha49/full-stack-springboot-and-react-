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
        this.handleUsernameChange=this.handleUsernameChange.bind(this)
        this.handlePasswordChange=this.handlePasswordChange.bind(this)
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
        console.log(event.target.value)
        this.setState({
                username:event.target.value

            }
        )
    }

    handlePasswordChange(event) {
        console.log(event.target.value)
        this.setState(
            {
                password:event.target.value
            }
        )

    }
}

export default TodoComponent