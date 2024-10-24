import 'bootstrap/dist/css/bootstrap.css';
import useCounter from "../hooks/useCounter";

function Counter() {
    const [counter, increment, decrement] = useCounter(0);
    return (
        <div className="container mt-5 text-center">
            <h1 className="mb-4">Count: {counter}</h1>
            <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-primary" onClick={increment}>
                    Tăng
                </button>
                <button className="btn btn-danger" onClick={decrement}>
                    Giảm
                </button>
            </div>
        </div>
    )
}

export default Counter;