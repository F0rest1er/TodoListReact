import React from "react";

function TodoList({ lists, setSelectedList }) {
  return (
    <div className="list-container">
      {lists.map((list) => (
        <div
          className="list-item"
          key={list.id}
          onClick={() => setSelectedList(list)}
        >
          <strong>{list.name}:</strong> (
          {list.todos.filter((todo) => todo.done).length}/{list.todos.length})
        </div>
      ))}
    </div>
  );
}

export default TodoList;
