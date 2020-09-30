import React from "react";
import "./App.css";
// Importing components
import Form from "./components/Form.js";
import TodoList from "./components/TodoList.js";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Siân's Todo List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
