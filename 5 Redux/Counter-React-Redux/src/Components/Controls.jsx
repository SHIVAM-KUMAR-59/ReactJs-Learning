import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const number = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAdd = () => {
    dispatch({ type: "ADD", payload: { num: number.current.value } });
    number.current.value = "";
  };

  const handleSubtract = () => {
    dispatch({ type: "SUBTRACT", payload: { num: number.current.value } });
    number.current.value = "";
  };

  const handlePrivacyToggle = () => {
    dispatch({ type: "TOGGLE_PRIVACY" });
  }

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          Increment button
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          Decrement button
        </button>

        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          placeholder="Enter Number"
          ref={number}
        />
        <button
          type="button"
          className="btn btn-info"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
