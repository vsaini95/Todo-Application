import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import SearchBar from "./components/SearchBar";
import { v4 as uuidv4 } from "uuid";

function App() {
  /*--------------- State Management------------------------------*/

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFinished, setShowFinished] = useState(false);

  // for Local Storage

  /*useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, []);

    const saveToLs = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };*/

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../Data/tasks.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  /*------------------ Handler Functions------------------------------------*/

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  const handleAdd = () => {
    if (todo) {
      setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    }
    setTodo("");
    // saveToLs();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    //saveToLs();
  };

  const handleDelete = (e, id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    //saveToLs();
  };

  const handleCheckBox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id == id;
    });

    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    // saveToLs();
  };

  const filteredTodos = todos.filter((todo) =>
    todo.todo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-20 bg-violet-100 rounded-xl sm:px-8 px-3 py-3 min-h-[80vh] md:w-2/3 lg:w-1/2">
      <h1 className="text-3xl text-center my-5 font-bold ">
        Today's Main Tasks
      </h1>
      <TodoForm addTodo={handleAdd} todo={todo} setTodo={setTodo} />
      <div className="container sm:flex">
        <div className="container">
          <input
            onChange={toggleFinished}
            type="checkbox"
            className="w-3 h-3 mx-2 accent-violet-800"
            checked={showFinished}
          />
          <h3 className="inline text-sm font-semibold">Completed</h3>
        </div>
        <SearchBar
          todos={todos}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filteredTodos={filteredTodos}
        />
      </div>
      <h2 className="text-md mb-2 mt-6 font-bold text-slate-500 italic">
        All Your Todos Here...
      </h2>
      <TodoList
        todos={searchQuery ? filteredTodos : todos}
        showFinished={showFinished}
        handleCheckBox={handleCheckBox}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
