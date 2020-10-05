import React, { useState, useEffect } from "react";
import "./App.css";
// Importing components
import Form from "./components/Form.js";
import TodoList from "./components/TodoList.js";
import Footer from "./components/Footer.js";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //RUN ONCE when the app starts
  useEffect(() => {
    const getLocalTodos = () => {
      if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      } else {
        let todoLocal = JSON.parse(localStorage.getItem("todos"));
        setTodos(todoLocal);
      }
    };
    getLocalTodos();
  }, []);

  //USE EFFECT
  useEffect(() => {
    const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };

    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  return (
    <div className="App">
      <header>
        <h1>Create your to-do list</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
      <Footer />
    </div>
  );
}

export default App;
