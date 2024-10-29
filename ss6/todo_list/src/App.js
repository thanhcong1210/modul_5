
import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify';
import TodoList from './component/TodoList';

function App() {
    return (
        <>
            <TodoList/>
            <ToastContainer/>
        </>
    );
}

export default App;
