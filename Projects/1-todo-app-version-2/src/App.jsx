import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";
import TodoItems from "./Components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "04/10/2024",
    },
    {
      name: "Go to College",
      dueDate: "04/10/2024",
    },
    {
      name: "Finish Homework",
      dueDate: "04/10/2024",
    }
  ];
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todoItems}/>
      </center>
    </>
  );
}

export default App;
