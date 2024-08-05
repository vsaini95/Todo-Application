import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  showFinished,
  handleCheckBox,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div className="todos">
      {todos.length === 0 && <div className="m-5">Empty todos</div>}
      {todos.map(
        (item) =>
          (showFinished || !item.isCompleted) && (
            <TodoItem
              key={item.id}
              todo={item}
              handleCheckBox={handleCheckBox}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              showFinished={showFinished}
            />
          )
      )}
    </div>
  );
};

export default TodoList;
