import React from "react";

const SearchToDo = (props) => {
  const { onChange } = props;
  return (
    <input
      type="text"
      name="todo"
      onChange={onChange}
      className="form-control mb-3 m-auto"
      placeholder="Search todos..."
    />
  );
};

export default SearchToDo;
