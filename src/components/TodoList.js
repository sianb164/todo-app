import React from "react";
//Import components
import Todo from "./Todo.js";

export default function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <div className="TodoList">
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <Todo
              todos={todos}
              setTodos={setTodos}
              todo={todo}
              key={todo.id}
              text={todo.text}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
