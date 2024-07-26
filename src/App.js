import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoDetails from "./components/TodoDetails";
import Form from "./components/Form";
import Search from "./components/Search";
import mockData from "./mockServer";

function App() {
  const [lists, setLists] = useState(mockData);
  const [selectedList, setSelectedList] = useState(null);
  const [filter, setFilter] = useState("");

  const handleCreateList = (name) => {
    const newList = { id: Date.now(), name, todos: [] };
    setLists([...lists, newList]);
  };

  const handleCreateTodo = (listId, task) => {
    setLists(
      lists.map((list) => {
        if (list.id === listId) {
          list.todos.push({ id: Date.now(), task, done: false });
        }
        return list;
      })
    );
  };

  const handleToggleTodo = (listId, todoId) => {
    setLists(
      lists.map((list) => {
        if (list.id === listId) {
          list.todos = list.todos.map((todo) =>
            todo.id === todoId ? { ...todo, done: !todo.done } : todo
          );
        }
        return list;
      })
    );
  };

  const filteredTodos = selectedList
    ? selectedList.todos.filter((todo) =>
        todo.task.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  return (
    <div className="app">
      <div className="container-left">
        <TodoList lists={lists} setSelectedList={setSelectedList} />
        <Form onSubmit={handleCreateList} placeholder="New list..." />
      </div>
      <div className="container-right">
        {selectedList && (
          <>
            <Search filter={filter} setFilter={setFilter} />
            <TodoDetails
              list={selectedList}
              todos={filteredTodos}
              onToggleTodo={handleToggleTodo}
              onCreateTodo={(task) => handleCreateTodo(selectedList.id, task)}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
