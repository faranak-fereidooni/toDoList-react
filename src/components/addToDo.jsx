import React from "react";

const AddToDo = (props) => {
  const { onSubmit } = props;
  return (
    <form onSubmit={onSubmit}>
      <label className="form-label text-light mt-3 mb-2">Add new todo...</label>
      <input type="text" name="todo" className="form-control mb-3 m-auto" />
    </form>
  );
};

export default AddToDo;
