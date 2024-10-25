import './App.css';
import React, { useState } from "react";
import { Form, Formik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };

    const [form, setForm] = useState([]);

    function handleValidate(values) {
        const errors = {};

        if (!values.name) {
            errors.name = 'Không được để trống';
        }

        if (!values.email) {
            errors.email = 'Không được để trống';
        } else if (!REGEX.email.test(values.email)) {
            errors.email = 'Email chưa đúng kìa';
        }

        if (!values.phone) {
            errors.phone = 'Không được để trống';
        }

        return errors;
    }

    const handleSubmit = (values, { resetForm }) => {
        setForm((prevForms) => [...prevForms, values]);
        toast.success("Thêm thành công rồi đấy!!!");
        resetForm();
    };

    return (
        <div className="bg-light min-vh-100 d-flex justify-content-center align-items-center">
            <div className="container p-5 bg-white rounded-4 shadow-lg">
                <div className="row">
                    <div className="col-md-6 border-end">
                        <h2 className="text-center mb-4 text-primary">Nhập thông tin</h2>

                        <Formik
                            initialValues={{ name: '', email: '', phone: '', description: '' }}
                            validate={handleValidate}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, handleSubmit, handleChange, values }) => (
                                <Form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Tên</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className={`form-control ${errors.name ? "is-invalid" : ""}`}
                                            value={values.name}
                                            onChange={handleChange}
                                        />
                                        <div className="invalid-feedback">{errors.name}</div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                            value={values.email}
                                            onChange={handleChange}
                                        />
                                        <div className="invalid-feedback">{errors.email}</div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Số điện thoại</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                                            value={values.phone}
                                            onChange={handleChange}
                                        />
                                        <div className="invalid-feedback">{errors.phone}</div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Mô tả</label>
                                        <textarea
                                            name="description"
                                            className="form-control"
                                            value={values.description}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary w-100">Thêm mới</button>
                                </Form>
                            )}
                        </Formik>
                    </div>

                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                        <h2 className="text-center mb-4 text-primary">Thông tin đã nhập</h2>
                        {form.length > 0 ? (
                            <table className="table table-hover">
                                <thead className="table-primary">
                                <tr>
                                    <th>Tên</th>
                                    <th>Email</th>
                                    <th>Số điện thoại</th>
                                    <th>Mô tả</th>
                                </tr>
                                </thead>
                                <tbody>
                                {form.map((entry, index) => (
                                    <tr key={index}>
                                        <td>{entry.name}</td>
                                        <td>{entry.email}</td>
                                        <td>{entry.phone}</td>
                                        <td>{entry.description}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        ) : (
                            <p className="text-muted">Chưa có thông tin nào được nhập!!!</p>
                        )}
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
}
