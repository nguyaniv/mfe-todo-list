import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const todosTasks = [
    { todo: "Complete project proposal", id: "todo-1" },
    { todo: "Prepare presentation slides", id: "todo-2" },
    { todo: "Review code for bugs", id: "todo-3" },
    { todo: "Schedule a meeting with the team", id: "todo-4" },
    { todo: "Write documentation", id: "todo-5" },
  ];
  return (
    <>
      <TodoList todos={todosTasks} />
    </>
  );
}

export default App;
