import React, {useState} from "react";
import {Table, Button, Alert} from "react-bootstrap";
import $ from "jquery";

class Crud extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            todos: [],
            response: {},
            isAddTodos: false,
            isEditTodos: false,
            id: ''
        }
        this.deleteTodos = this.deleteTodos.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        let API;
        let method;
        let body;

        if (this.state.isEditTodos) {
            method = "PUT";
            API = "http://localhost:8080/todo/update";

            const id = this.state.id;
            const title = event.target.title.value;
            const description = event.target.description.value;
            body = new URLSearchParams({
                id: id,
                title: title,
                description: description
            });
        } else {
            method = "POST";
            API = "http://localhost:8080/todo/save";

            const title = event.target.title.value;
            const description = event.target.description.value;
            body = new URLSearchParams({
                title: title,
                description: description
            });
        }

        const headers = new Headers();
        headers.append("Accept", "application/json");
        headers.append("Content-Type", "application/x-www-form-urlencoded");

        const apiUrl = API;

        const options = {
            method: method,
            body: body.toString(),
            headers
        }
        fetch(apiUrl, options)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.componentDidMount();
                },
                (error) => {
                    this.setState({error});
                }
            )
        alert('data was submitted');
    }

    componentDidMount() {
        const apiUrl = "http://localhost:8080/todo";
        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        todos: result.data
                    });
                },
                (error) => {
                    this.setState({error});
                }
            )
    }

    deleteTodos(id) {
        const {todos} = this.state;
        const apiUrl = "http://localhost:8080/todo/delete/" + id;
        const options = {
            method: "DELETE"
        }
        fetch(apiUrl, options)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        response: result
                    });
                    this.componentDidMount();
                },
                (error) => {
                    this.setState({error});
                }
            )
    }

    editTodos(id) {
        const {todos} = this.state;
        const apiUrl = "http://localhost:8080/todo/" + id;
        const options = {
            method: "GET"
        }
        fetch(apiUrl, options)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        response: result
                    });
                    this.setState({
                        id: this.state.id = result.data.id,
                        title: this.state.title = result.data.title,
                        description: this.state.description = result.data.description,
                    });
                    this.state.isEditTodos = true;
                    console.log(result.data);
                },
                (error) => {
                    this.setState({error});
                }
            )
    }

    render() {

        const {error, todos} = this.state;
        if (error) {
            return (
                <div>Error: {error.message}</div>
            )
        } else {
            return (
                <div>
                    <h2>Todos List</h2>
                    <form id={"myform"} action="" onSubmit={this.handleSubmit}>
                        <div className={"form-group"}>
                            <input required={true} type="text" name={"title"}
                                   defaultValue={this.state.title}/>
                        </div>
                        <div className={"form-group"}>
                            <input required={true} type="text" name={"description"}
                                   defaultValue={this.state.description}/>
                        </div>
                        <button className={"btn btn-primary"} type={"submit"}>submit</button>
                    </form>
                    <Table>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            todos.map(todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.title}</td>
                                    <td>{todo.description}</td>
                                    <td>
                                        <Button variant="info"
                                                onClick={() => this.editTodos(todo.id)}>Edit</Button>
                                        <Button variant="danger"
                                                onClick={() => this.deleteTodos(todo.id)}>Delete</Button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                </div>
            )
        }
        return (
            <div>
                <h2>Crud Api</h2>
            </div>
        )
    }
}

export default Crud;