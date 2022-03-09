import React from "react";

const SearchToDo = (props) => {
  const { todos, onChange } = props;
  return (
    <input
      type="text"
      name="todo"
      todos={todos}
      onChange={onChange}
      className="form-control mb-3 m-auto"
      placeholder="Search todos..."
    />
  );
};

export default SearchToDo;
