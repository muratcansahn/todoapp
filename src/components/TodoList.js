import React from "react";

const TodoList = ({ todos, setTodos }) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className="list"
            onChange={(e) => e.preventDefault()}
          />

          <div>
            <button
              className="btn btn-danger mx-2"
              onClick={() => {
                handleDelete(todo);
              }}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
