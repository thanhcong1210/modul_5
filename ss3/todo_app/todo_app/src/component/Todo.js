import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            item: "",
        };
    }

    handleChange = (event) => {
        this.setState({ item: event.target.value });
    };

    handleSubmit = () => {
        const { item, list } = this.state;
        if (item.trim()) {
            this.setState({
                list: [...list, item],
                item: ''
            });
        }
    };

    render() {
        return (
            <div className="container mt-5">
                <div className="card mx-auto" style={{ maxWidth: 500 }}>
                    <div className="card-header bg-primary text-white text-center">
                        <h2>Todo List</h2>
                    </div>
                    <div className="card-body">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter task"
                                value={this.state.item}
                                onChange={this.handleChange}
                            />
                            <button
                                className="btn btn-success"
                                onClick={this.handleSubmit}
                            >
                                Add
                            </button>
                        </div>

                        {this.state.list.length > 0 && (
                            <ul className="list-group">
                                {this.state.list.map((todo, index) => (
                                    <li
                                        key={index}
                                        className="list-group-item d-flex justify-content-between align-items-center"
                                    >
                                        {todo}
                                        <span className="badge bg-primary rounded-pill">
                                            {index + 1}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
