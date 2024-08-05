import React from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const TodoItem = ({ todo, handleCheckBox, handleEdit, handleDelete }) => {
  return (
    <div className="todo my-3 flex w-full justify-between" key={todo.id}>
      <div className="flex gap-4 bg-white w-full mx-1 p-1 rounded-md">
        <input
          name={todo.id}
          onChange={handleCheckBox}
          type="checkbox"
          checked={todo.isCompleted}
          className="w-4 h-4 m-1 accent-violet-800 "
        />
        <div className={todo.isCompleted ? "line-through" : ""}>
          {todo.todo}
        </div>
      </div>
      <div className="buttons flex h-full">
        <button
          onClick={(e) => handleEdit(e, todo.id)}
          className="bg-green-600 hover:bg-green-800 p-2 text-sm font-bold text-white rounded-md mx-1"
        >
          <FaEdit />
        </button>
        <button
          onClick={(e) => handleDelete(e, todo.id)}
          className="bg-red-600 hover:bg-red-800 p-2 text-sm font-bold text-white rounded-md mx-1"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
