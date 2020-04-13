import React, {useState} from "react";
import {Table, Button, Alert} from "react-bootstrap";

class Crud extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            todos: [],
            response: {}
        }
        this.deleteTodos = this.deleteTodos.bind(this);
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
        const formData = new FormData();
        formData.append('id', id);
        const options = {
            method: "DELETE",
            body: formData
        }
        fetch(apiUrl,options)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        response: result
                    });
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
                                                onClick={() => this.props.editTodos(todo.id)}>Edit</Button>
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