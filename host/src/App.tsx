import { useEffect, useState } from "react";
import TodoList from "remote/TodoList";

interface Todo {
  todo: string;
  id: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    setTodos(todosTasks);
  }, []);

  const todosTasks = [
    { todo: "Complete project proposal", id: "todo-1" },
    { todo: "Prepare presentation slides", id: "todo-2" },
    { todo: "Review code for bugs", id: "todo-3" },
    { todo: "Schedule a meeting with the team", id: "todo-4" },
    { todo: "Write documentation", id: "todo-5" },
  ];

  const onDeleteTask = (id: string) => {
    const filteredTodos = todos.filter((todo: Todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const onAddTodo = () => {
    const todo = {
      todo: newTodo,
      id: `todo-${todos.length + 1}`,
    };

    setTodos((prev: Todo[]) => [...prev, todo]);
  };

  useEffect(() => {
    setTodos(todosTasks);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <TodoList
        setNewTodo={setNewTodo}
        addNewTodo={onAddTodo}
        onDeleteTask={onDeleteTask}
        todos={todos}
      />
    </div>
  );
}

export default App;
