import React, {Component} from "react";

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "topuser",
            password: "",
            hasLoginFailed:false,
            showSuccessMessage:false
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)

    }

    render() {
        return (
            <div>

                {/*<ShowInvalidCredentialsMessage hasLoginFailed={this.state.hasLoginFailed}/>*/}

                {this.state.hasLoginFailed && <div>Invalid username or password</div>}

                {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                {this.state.showSuccessMessage  && <div>Login successful</div>}
                Username: <input type="text"
                                 name="username"
                                 value={this.state.username}
                                 onChange={this.handleChange}/>
                Password: <input type="text"
                                 name="password"
                                 value={this.state.password}
                                 onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>
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


    loginClicked() {
        if(this.state.username==='topuser' && this.state.password==='pass'){
            console.log('login successful')
            this.props.history.push("/welcome")
            this.setState({showSuccessMessage:true})
            this.setState({hasLoginFailed:false})
        }
        else{
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
            console.log('login failed')
        }
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

/*

function ShowInvalidCredentialsMessage(props){
    if (props.hasLoginFailed){
        return <div>Invalid username or password </div>
    } else
        return null;
}

*/


/*
function ShowLoginSuccessMessage(props){
    if (props.showSuccessMessage){
        return <div>Login Successful </div>
    } else
        return null;
}
*/


export default LoginComponent