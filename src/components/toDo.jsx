import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ToDo = (props) => {
  const { todo, onDelete } = props;
  return (
    <li
      id={todo.id}
      value={todo.value}
      className="list-group-item d-flex text-light justify-content-between align-item-center"
    >
      <span>{todo.value}</span>
      <FontAwesomeIcon
        icon={faTrashCan}
        className="delete"
        onClick={() => {
          onDelete(todo.id);
        }}
      />
    </li>
  );
};

export default ToDo;
