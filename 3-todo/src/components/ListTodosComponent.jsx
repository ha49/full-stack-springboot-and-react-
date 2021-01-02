import React, {Component} from 'react'

class ListTodosComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [{id: 1, description: "buy flight tickets"},
                {id: 2, description: "piano lesson"},
                {id: 3, description: "call mamma"}

            ]
        }
    }


    render() {

        return <div>
            <h1><span className="temporary-style">todo list </span></h1>


            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>description</th>
                </tr>
                </thead>

                <tbody>

                {
                    this.state.todos.map(
                        todo =>
                            <tr>

                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                            </tr>
                    )

                }


                </tbody>
            </table>


        </div>
    }

}


export default ListTodosComponent