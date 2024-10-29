import {useState, useEffect} from "react";
import {Formik, Field, ErrorMessage, Form} from "formik";
import {toast} from "react-toastify";
import * as Yup from "yup";
import 'bootstrap/dist/css/bootstrap.css';
import * as todoService from '../service/TodoService'

function TodoList() {

    const [job, setJob] = useState([]);
    const [form, setForm] = useState({
        title: '',
    })

    useEffect(() => {
        const getAll = async () => {
            let response = await todoService.getAll();
            setJob(response);
        }
        getAll();

    }, [])


    const objectValid = {
        title: Yup.string().required("Không được bỏ trống nội dung này")
    }

    const save = async (value, {resetFrom}) => {
        let isSuccess = await todoService.save(value);
        if (isSuccess) {
            setJob([...job, value])
            toast.success("Chúc mừng bạn đã thêm mới thành công")
            resetFrom();
        } else {
            toast.error("Thêm mới thất bại")
        }
    }

    return (

        <div className="container mt-5 p-4 border rounded shadow-sm bg-light">
            <div className="text-center mb-4">
                <h2 className="text-primary">Danh sách Công Việc</h2>
            </div>

            <Formik
                initialValues={form}
                onSubmit={save}
                validationSchema={Yup.object(objectValid)}
            >
                <Form className="row g-3 align-items-center">
                    <div className="col-auto flex-grow-1">
                        <Field
                            className="form-control"
                            name="title"
                            placeholder="Nhập công việc..."
                        />
                        <ErrorMessage
                            name="title"
                            component="p"
                            className="text-danger small mt-1"
                        />
                    </div>

                    <div className="col-auto">
                        <button
                            type="submit"
                            className="btn btn-primary btn-sm"
                        >
                            Thêm mới
                        </button>
                    </div>
                </Form>
            </Formik>

            <div className="mt-4">
                <ol className="list-group list-group-numbered">
                    {job.length > 0 ? (
                        job.map((item) => (
                            <li
                                key={item.id}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                {item.title}
                                <span className="badge bg-success">Hoàn tất</span>
                            </li>
                        ))
                    ) : (
                        <p className="text-muted">Chưa có công việc nào.</p>
                    )}
                </ol>
            </div>
        </div>


    );
}

export default TodoList;