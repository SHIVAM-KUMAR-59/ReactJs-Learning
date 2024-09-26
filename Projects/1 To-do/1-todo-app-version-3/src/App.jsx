import AddTodo from "./Components/AddTodo"; // Component for adding a new todo item
import AppName from "./Components/AppName"; // Component to display the application name
import "./App.css"; // CSS for styling the app
import TodoItems from "./Components/TodoItems"; // Component to display the list of todo items
import { useState } from "react"; // Hook for managing state
import WelcomeMsg from "./Components/WelcomeMsg"; // Component to display a welcome message when no todos are present

function App() {
  // State to store and update the list of todo items
  const [todoItems, setTodoItems] = useState([]);

  // Function to handle adding a new todo item
  const handleNewItem = (itemName, itemDueDate) => {
    if (!(itemName === "" || itemDueDate === "")) {
      setTodoItems((currentValue) => {
        const newTodoItem = [
          ...currentValue, // Spread the current todo items
          { name: itemName, dueDate: itemDueDate }, // Add the new item to the list
        ];
        return newTodoItem; // Return the new item
      });
    }
  };

  // Function to handle deleting a todo item
  const handleDeleteItem = (todoItemName) => {
    // Filter the todo items, removing the one that matches the given name
    const newTodoItem = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItem); // Update the state with the filtered items
  };

  return (
    <>
      {/* Main container for the todo application */}
      <center className="todo-container">
        {/* Display the application name */}
        <AppName />

        {/* Component to add a new todo item, passing down the handleNewItem function */}
        <AddTodo onNewItem={handleNewItem} />

        {/* If there are no todo items, display a welcome message */}
        {todoItems.length === 0 && <WelcomeMsg />}

        {/* Display the list of todo items and handle deletion */}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </center>
    </>
  );
}

export default App;
