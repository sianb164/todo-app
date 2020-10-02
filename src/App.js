import React, { useState } from "react";
import "./App.css";
// Importing components
import Form from "./components/Form.js";
import TodoList from "./components/TodoList.js";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Siân's Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <TodoList />
    </div>
  );
}

export default App;
