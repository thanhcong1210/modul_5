import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Student = () => {
    const [studentList, setStudentList] = useState([]);
    const [form, setForm] = useState({ name: "", phone: "", email: "" });
    const [isValid, setIsValid] = useState(false);
    const [indexSelected, setIndexSelected] = useState(-1);
    const [modalVisible, setModalVisible] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [indexToDelete, setIndexToDelete] = useState(null);

    const checkInvalidForm = () => {
        const { name, phone, email } = form;
        setIsValid(name && phone && email);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
        checkInvalidForm();
    };

    const handleSelect = (studentSelect, index) => {
        setForm({ ...studentSelect });
        setIndexSelected(index);
        setModalVisible(true);
    };

    const handleSubmit = () => {
        if (isValid) {
            const newList = [...studentList];

            if (indexSelected > -1) {
                newList.splice(indexSelected, 1, form);
            } else {
                newList.push(form);
                setShowToast(true);
            }

            setStudentList(newList);
            setForm({ name: "", phone: "", email: "" });
            setIsValid(false);
            setIndexSelected(-1);
            setModalVisible(false);
        }
    };

    const confirmDelete = (index) => {
        setIndexToDelete(index);
        setModalVisible(true);
    };

    const handleDelete = () => {
        if (indexToDelete !== null) {
            const newList = [...studentList];
            newList.splice(indexToDelete, 1);
            setStudentList(newList);
            setModalVisible(false);
            setIndexToDelete(null);
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Student List</h1>

            <div className="text-center mb-4">
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        setModalVisible(true);
                        setIndexSelected(-1); // Reset indexSelected
                        setForm({ name: "", phone: "", email: "" }); // Reset form
                    }}
                >
                    Add New Student
                </button>
            </div>

            <table className="table table-bordered table-hover">
                <thead className="table-dark">
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {studentList.map((student, index) => (
                    <tr key={index}>
                        <td>{student.name}</td>
                        <td>{student.phone}</td>
                        <td>{student.email}</td>
                        <td>
                            <button
                                className="btn btn-warning me-2"
                                onClick={() => handleSelect(student, index)}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-danger"
                                onClick={() => confirmDelete(index)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Modal for Adding or Editing Student */}
            <div
                className={`modal ${modalVisible ? "show" : ""}`}
                tabIndex="-1"
                style={{ display: modalVisible ? "block" : "none" }}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {indexSelected > -1 ? "Edit Student" : "Add New Student"}
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={() => setModalVisible(false)}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <input
                                type="text"
                                name="name"
                                className="form-control mb-3"
                                placeholder="Name"
                                value={form.name}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="phone"
                                className="form-control mb-3"
                                placeholder="Phone"
                                value={form.phone}
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Email"
                                value={form.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => setModalVisible(false)}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleSubmit}
                                disabled={!isValid}
                            >
                                {indexSelected > -1 ? "Save Changes" : "Add Student"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Toast Notification */}
            <div
                className={`toast position-fixed bottom-0 end-0 p-3 ${showToast ? "show" : ""}`}
                style={{ zIndex: 11 }}
            >
                <div className="toast-header">
                    <strong className="me-auto">Notification</strong>
                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => setShowToast(false)}
                    ></button>
                </div>
                <div className="toast-body">Student added successfully!</div>
            </div>
        </div>
    );
};

export default Student;
