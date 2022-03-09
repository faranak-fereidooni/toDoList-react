import React from "react";
import ToDo from "./toDo";

const ToDoList = (props) => {
  const { todos, onDelete } = props;
  return (
    <ul className="list-group todos mx-auto">
      {todos.map((todo) => (
        <ToDo key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ToDoList;
