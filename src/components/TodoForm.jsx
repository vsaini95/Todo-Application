import React from "react";
import { RiAddLargeFill } from "react-icons/ri";

const TodoForm = (props) => {
  const handleChange = (e) => {
    props.setTodo(e.target.value);
  };

  return (
    <>
      <div className="addTodo flex justify-center my-5">
        <input
          onChange={handleChange}
          value={props.todo}
          className="w-full p-y pl-3 placeholder:text-slate-400 focus:outline-none shadow-sm rounded-md"
          type="text"
          id=""
          placeholder="Add a Todo"
        />
        <button
          onClick={props.addTodo}
          disabled={props.todo.length <= 2}
          className="bg-violet-600 disabled:bg-violet-800  hover:bg-violet-950 p-2 px-3 text-md font-bold text-white rounded-md mx-2"
        >
          <RiAddLargeFill className="w-5 h-4" />
        </button>
      </div>
    </>
  );
};

export default TodoForm;
