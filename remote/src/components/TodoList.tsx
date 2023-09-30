const TodoList = ({ todos, onDeleteTask, addNewTodo, setNewTodo }: any) => {
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
        }}
      >
        <input
          style={{
            width: "100%",
          }}
          onChange={(e) => setNewTodo(e.target.value)}
          type="text"
          placeholder="New todo..."
        />
        <button onClick={addNewTodo}>Add</button>
      </div>
      <div className="todo_header">
        <div>id</div>
        <div>task</div>
      </div>

      {todos?.map((todo: any) => {
        return (
          <div key={todo.id} className="todo">
            <div className="id">{todo.id}</div>
            <div className="task">{todo.todo}</div>
            <button onClick={() => onDeleteTask(todo.id)} className="delete">
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
