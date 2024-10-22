import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
                { id: 1, name: "Công", class: "c05", address: "Đà Nẵng" },
                { id: 2, name: "Linh", class: "c05", address: "Đà Nẵng" },
                { id: 3, name: "Hiếu", class: "c05", address: "Đà Nẵng" },
                { id: 4, name: "Vỹ", class: "c05", address: "Đà Nẵng" },
                { id: 5, name: "Mẫn", class: "c05", address: "Đà Nẵng" }
            ],
        };
    }

    render() {
        return (
            <div className="container mt-5">
                <h1 className="text-center mb-4 text-primary">Student List</h1>
                <table className="table table-bordered table-hover text-center">
                    <thead style={{ backgroundColor: '#007bff', color: 'white' }}>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.class}</td>
                            <td>{student.address}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
