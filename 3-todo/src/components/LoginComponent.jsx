import React, {Component} from "react";

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "topuser",
            password: ""
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    render() {
        return (
            <div>

                Username: <input type="text"
                                 name="username"
                                 value={this.state.username}
                                 onChange={this.handleChange}/>
                Password: <input type="text"
                                 name="password"
                                 value={this.state.password}
                                 onChange={this.handleChange}/>
                <button>Login</button>
            </div>
        )
    }


    handleChange(event) {
        console.log("event -> "+event.target.name + ":"+ event.target.value)
        console.log(this.state)

        this.setState(
            {
                [event.target.name]
                    : event.target.value

            }
        )


    }

    /*    handleUsernameChange(event) {
            console.log(event.target.name)
            console.log(event.target.value)

            this.setState({
                   [event.target.value]: event.target.value

                }
            )
        }*/
    /*
        handlePasswordChange(event) {
            console.log(event.target.name)
            console.log(event.target.value)
            this.setState(
                {
                    [event.target.value]: event.target.value
                }
            )

        }*/
}

export default LoginComponent