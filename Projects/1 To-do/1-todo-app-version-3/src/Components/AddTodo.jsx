import { useState } from "react";

function AddTodo({ onNewItem }) {
  // State to store the name of the todo
  const [todoName, setTodoName] = useState('');

  // State to store the due date of the todo
  const [todoDueDate, setTodoDueDate] = useState('');

  // Handler for the name input change event
  const handleNameChange = (e) => {
    setTodoName(e.target.value);  // Update todo name state with the value from the input
  };

  // Handler for the due date input change event
  const handleDateChange = (e) => {
    setTodoDueDate(e.target.value);  // Update due date state with the value from the date input
  };

  // Handler for the Add Task button click event
  const handleAddButton = () => {
    // Call the onNewItem function (passed from parent) to add the new todo
    onNewItem(todoName, todoDueDate);

    // Clear the input fields after adding the task
    setTodoName("");
    setTodoDueDate("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        {/* Input field for the todo name */}
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName} // Controlled input for todo name
            onChange={handleNameChange} // Call handler when input value changes
          />
        </div>

        {/* Input field for the todo due date */}
        <div className="col-4">
          <input
            type="date"
            value={todoDueDate} // Controlled input for due date
            onChange={handleDateChange} // Call handler when date value changes
          />
        </div>

        {/* Add Task button */}
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButton} // Call handler when button is clicked
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
