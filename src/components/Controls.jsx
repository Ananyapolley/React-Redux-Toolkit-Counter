import { useDispatch } from "react-redux";
import { useRef } from "react";
import { counterActions } from "../store/Counter.js";
import { privacyActions } from "../store/Privacy.js";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handlePrivacyToggle = () => {
    dispatch(privacyActions.togglePrivacy());
  };

  const handleAdd = () => {
    dispatch(counterActions.add(Number(inputElement.current.value)));
    inputElement.current.value = "";
  };

  const handleSubtract = () => {
    dispatch(counterActions.subtract(Number(inputElement.current.value)));
    inputElement.current.value = "";
  };

  const handleReset = () => {
    dispatch(counterActions.reset());
  };

  return (
    <div>
      <div className="d-grid gap-2 gap-sm-3 mb-3 mb-md-4">
        <button
          type="button"
          className="btn btn-primary fw-semibold btn-sm btn-md-lg"
          onClick={handleIncrement}
        >
          <i className="bi bi-plus-circle"></i>
          <span className="d-none d-sm-inline ms-2">Increment (+1)</span>
          <span className="d-sm-none">+1</span>
        </button>
        <button
          type="button"
          className="btn btn-success fw-semibold btn-sm btn-md-lg"
          onClick={handleDecrement}
        >
          <i className="bi bi-dash-circle"></i>
          <span className="d-none d-sm-inline ms-2">Decrement (-1)</span>
          <span className="d-sm-none">-1</span>
        </button>
        <button
          type="button"
          className="btn btn-warning fw-semibold btn-sm btn-md-lg"
          onClick={handlePrivacyToggle}
        >
          <i className="bi bi-shield-lock"></i>
          <span className="d-none d-sm-inline ms-2">Privacy Toggle</span>
          <span className="d-sm-none">Privacy</span>
        </button>
      </div>

      <div className="card bg-light border-0 p-3 p-sm-4 mb-3">
        <div className="input-group mb-3">
          <input
            type="number"
            ref={inputElement}
            className="form-control"
            placeholder="Enter a number"
            aria-label="Enter a number"
          />
        </div>
        <div className="d-grid gap-2 d-sm-flex gap-sm-2">
          <button
            type="button"
            className="btn btn-info flex-fill fw-semibold btn-sm btn-sm-md"
            onClick={handleAdd}
          >
            <i className="bi bi-plus"></i>
            <span className="d-none d-sm-inline ms-1">Add</span>
          </button>
          <button
            type="button"
            className="btn btn-danger flex-fill fw-semibold btn-sm btn-sm-md"
            onClick={handleSubtract}
          >
            <i className="bi bi-dash"></i>
            <span className="d-none d-sm-inline ms-1">Subtract</span>
          </button>
        </div>
      </div>

      <button
        type="button"
        className="btn btn-outline-secondary w-100 fw-semibold btn-sm btn-md-lg"
        onClick={handleReset}
      >
        <i className="bi bi-arrow-clockwise"></i>
        <span className="d-none d-sm-inline ms-2">Reset Counter</span>
        <span className="d-sm-none">Reset</span>
      </button>
    </div>
  );
};

export default Controls;
