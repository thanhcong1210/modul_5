import {useState, useEffect} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import * as bookService from "../service/BookService";
import {Field, Formik, Form} from "formik";
import {toast} from "react-toastify";

function BookEdit() {
    const {id} = useParams();
    const [book, setBook] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        findBook();
    }, [])

    const findBook = async () => {
        try {
            const data = await bookService.getBookById(id);
            setBook(data);
        } catch (err) {
            toast.error("Đang bị lỗi gì đó")
        }
    }

    const handleSubmit = async (values) => {
        try {
            const isSuccess = await bookService.editBook(id, values);
            if (isSuccess) {
                toast.success("Cập nhật thành công")
                navigate("/");
            } else {
                toast.error("cập nhật thất bại")
            }
        } catch (error) {
            toast.error("Lỗi rồi kìa sách k cập nhật được")
        }
    }

    if (!book) return <p>Loading...</p>

    return (
        <div className="container">
            <h1>Sửa sách</h1>
            <Formik
                initialValues={{title: book.title, quantity: book.quantity}}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <Field
                            name="title"
                            type="text"
                            className="form-control w-50"
                            id="title"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="quantity" className="form-label">Quantity</label>
                        <Field
                            name="quantity"
                            type="number"
                            className="form-control w-50"
                            id="quantity"
                        />
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                        <button type="submit" className="btn btn-primary">Cập nhật</button>
                        <Link className="btn btn-success" to="/">Trở lại</Link>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default BookEdit;