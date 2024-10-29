import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import BookList from "./component/BookList";
import BookCreate from "./component/BookCreate";
import BookEdit from "./component/BookEdit";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BookList/>}></Route>
                    <Route path="/create" element={<BookCreate/>}></Route>
                    <Route path="/book/:id" element={<BookEdit/>}></Route>
                </Routes>
            </BrowserRouter>
            <ToastContainer/>
        </>
    );
}

export default App;
