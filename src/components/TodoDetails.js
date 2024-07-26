import React, { useState } from "react";

function TodoDetails({ list, todos, onToggleTodo, onCreateTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onCreateTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div className="list-items">
      {todos.map((todo) => (
        <div
          className="item"
          key={todo.id}
          onClick={() => onToggleTodo(list.id, todo.id)}
        >
          <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
            {todo.task}
          </span>
          <span className="cross">X</span>
        </div>
      ))}
      <input
        type="text"
        placeholder="Add todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default TodoDetails;
