import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Counter() {
    let [counter, setCounter] = useState(0);
    let [count, setCount] = useState(0);

    const handleClick = () => {
        const newValue = counter + 1;
        setCounter(newValue);
    };

    const handleClickOut = () => {
        const newValue = counter - 1;
        setCounter(newValue);
    };

    return (
        <div className="container mt-5 text-center">
            <h1 className="mb-4">Count: {counter}</h1>
            <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-primary" onClick={handleClick}>
                    Add 1
                </button>
                <button className="btn btn-danger" onClick={handleClickOut}>
                    Add 2
                </button>
            </div>
        </div>
    )
}

export default Counter;