import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { RiAddLargeFill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

function App() {
  /*-----------------------------State Management--------------------------*/

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFinished, setShowFinished] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, []);

  /*------------------------Stored at Localstorage----------------------------- */

  const saveToLs = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
    //console.log(todos);
  };

  /*------------------------------Handler Callbacks----------------------------- */

  const toggleFinished = (params) => {
    setShowFinished(!showFinished);
  };

  const handleAdd = () => {
    if (todo) {
      setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    }
    //console.log(todos);
    setTodo("");
    saveToLs();
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
    saveToLs();
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveToLs();
  };

  const handleCheckBox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLs();
  };

  return (
    <>
      <div className="container mx-auto mt-20 bg-violet-100 rounded-xl sm:px-8 px-3 py-3 min-h-[80vh] md:w-2/3 lg:w-1/2">
        <h1 className="text-3xl text-center my-5 font-bold ">
          Today's Main Tasks
        </h1>
        <div className="addTodo flex justify-center my-5">
          <input
            onChange={handleChange}
            value={todo}
            className="w-full p-y pl-3 placeholder:text-slate-400 focus:outline-none shadow-sm rounded-md"
            type="text"
            id=""
            placeholder="Add a Todo"
          />
          <button
            onClick={handleAdd}
            disabled={todo.length <= 2}
            className="bg-violet-600 disabled:bg-violet-800  hover:bg-violet-950 p-2 px-3 text-md font-bold text-white rounded-md mx-2"
          >
            <RiAddLargeFill className="w-5 h-4" />
          </button>
        </div>
        <div className="container flex">
          <div className="container">
            <input
              onChange={toggleFinished}
              type="checkbox"
              className="w-3 h-3 mx-2 accent-violet-800"
              checked={showFinished}
            />
            <h3 className="inline text-sm font-semibold">Completed</h3>
          </div>
          <div className="search-bar flex">
            <input
              type="text"
              placeholder="Search todos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="py-1 pl-3 mx-1 rounded-md focus:outline-none"
            />
            <button className="bg-violet-600 hover:bg-violet-800 p-2  text-sm font-bold text-white rounded-md mx-1">
              <FaSearch />
            </button>
          </div>
        </div>

        <h2 className="text-md mb-2 mt-6 font-bold text-slate-500 italic">
          All Your Todos Here...
        </h2>
        <div className="todos">
          {todos.length === 0 && <div className="m-5">Empty todos</div>}
          {todos.map((item) => {
            return (
              (showFinished || !item.isCompleted) && (
                <div
                  key={item.id}
                  className="todo my-3 flex w-full justify-between"
                >
                  <div className="flex gap-4 bg-white w-full mx-1 p-1 rounded-md">
                    <input
                      name={item.id}
                      onChange={handleCheckBox}
                      type="checkbox"
                      checked={item.isCompleted}
                      className="w-4 h-4 m-1 accent-violet-800 "
                    />
                    <div className={item.isCompleted ? "line-through" : ""}>
                      {item.todo}
                    </div>
                  </div>
                  <div className="buttons flex h-full">
                    <button
                      onClick={(e) => {
                        handleEdit(e, item.id);
                      }}
                      className="bg-green-600 hover:bg-green-800 p-2  text-sm font-bold text-white rounded-md mx-1"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={(e) => {
                        handleDelete(e, item.id);
                      }}
                      className="bg-red-600 hover:bg-red-800 p-2 text-sm font-bold text-white rounded-md mx-1"
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
