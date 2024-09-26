import { useRef, useState } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {

  const todoNameElement = useRef();
  const dueDateElement = useRef();


  // Handler for the Add Task button click event
  const handleAddButton = (e) => {

    e.preventDefault();

    const todoName = todoNameElement.current.value;
    const todoDueDate = dueDateElement.current.value;

    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    
    // Call the onNewItem function (passed from parent) to add the new todo
    onNewItem(todoName, todoDueDate);

  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButton} >
        {/* Input field for the todo name */}
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={todoNameElement}
          />
        </div>

        {/* Input field for the todo due date */}
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
          />
        </div>

        {/* Add Task button */}
        <div className="col-2">
          <button
            className="btn btn-success kg-button"
          >
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;