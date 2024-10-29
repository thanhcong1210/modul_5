import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Modal, Button} from "react-bootstrap";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import * as bookService from "../service/BookService";

function BookList() {
    const [books, setBooks] = useState([]);
    const [modal, setModal] = useState(false);
    const [bookDelete, setBookDelete] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getAllBooks();
    }, []);

    const getAllBooks = async () => {
        let response = await bookService.getAllBooks();
        setBooks(response);
    };

    const handleDeleteClick = (book) => {
        setBookDelete(book);
        setModal(true);
    };

    const handleConfirmDelete = async () => {
        if (bookDelete) {
            const isSuccess = await bookService.deleteBook(bookDelete.id);
            if (isSuccess) {
                setBooks(books.filter(book1 => book1.id !== bookDelete.id));
                setModal(false);
                setBookDelete(null);
                toast.success("Xóa thành công");
            } else {
                toast.error("Xóa thất bại")
            }
        }
    }

    const handleCloseModal = () => {
        setModal(false);
        setBookDelete(null);
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center">
                <h1>Quản lý thư viện</h1>
                <Link className="btn btn-success" to="/create">Thêm mới</Link>
            </div>
            <table className="table table-striped mt-4">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book, index) =>
                    <tr key={book.id}>
                        <td>{index + 1}</td>
                        <td>{book.title}</td>
                        <td>{book.quantity}</td>
                        <td>
                            <Link className="btn btn-warning me-3" to={`editBook/${book.id}`}>Chỉnh sửa</Link>
                            <Button className="btn btn-danger" onClick={() => handleDeleteClick(book)}>Xóa</Button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>

            <Modal show={modal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận xóa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bạn có chắc chắn muốn xóa sách có tên là : <strong>{bookDelete?.title}</strong>?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Hủy
                    </Button>
                    <Button variant="primary" onClick={handleConfirmDelete}>
                        Xác nhận xóa
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default BookList;