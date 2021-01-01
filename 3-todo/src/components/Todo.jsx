import React, {Component} from "react";
import LoginComponent from "./LoginComponent";
import WelcomePageComponent from "./WelcomePageComponent";
import {BrowserRouter as Router, Route} from "react-router-dom";

class TodoComponent extends Component {

    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/welcome" component={WelcomePageComponent} />
                    </>


                </Router>
                {/*<LoginComponent/>*/}
                {/*<WelcomePageComponent/>*/}
            </div>
        )
    }

}


export default TodoComponent