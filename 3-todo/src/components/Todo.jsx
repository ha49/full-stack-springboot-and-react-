import React, {Component} from "react";
import LoginComponent from "./LoginComponent";
import WelcomePageComponent from "./WelcomePageComponent";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ErrorComponent from "./ErrorComp";
import ListTodosComponent from "./ListTodosComponent";



class TodoComponent extends Component {

    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/welcome/:name" component={WelcomePageComponent} />
                        <Route path="/todos" component={ListTodosComponent}/>
                        <Route component={ErrorComponent} />

                        </Switch>
                    </>


                </Router>
                {/*<LoginComponent/>*/}
                {/*<WelcomePageComponent/>*/}
            </div>
        )
    }

}


export default TodoComponent