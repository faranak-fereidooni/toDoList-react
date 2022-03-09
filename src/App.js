import React, { Component } from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import SearchToDo from "./components/searchToDo";
import ToDoList from "./components/toDoList";
import AddToDo from "./components/addToDo";


class App extends Component {
  state = {
    todos: [
      { id: "1", value: "Buy Milk" },
      { id: "2", value: "Take a shower" },
      { id: "3", value: "Buy mango" },
      { id: "4", value: "Make a tea" },
    ],
  };
 

  handleAdd=(e)=>{
    e.preventDefault();
    const todos=[...this.state.todos];
    const item={id:Math.floor(Math.random() * 100),value:e.target.todo.value};
    todos.push(item);
    this.setState({todos});
    e.target.todo.value="";
  }

  handleDelete=(todoId)=>{
    const todos=this.state.todos.filter(t=>t.id != todoId)
    this.setState({todos});
  }

  handleSearch = (e) => {
    e.preventDefault();
    const todos =this.state.todos.filter(todo=> todo.value.trim().toLowerCase().includes(e.target.value));
    this.setState({todos});
  };

  render() { 
    return (
      <div className="container">
          <h1 className="text-light mb-5 mt-5 text-center">ToDo List</h1>
        <SearchToDo todos={this.state.todos} onChange={this.handleSearch} />
        <ToDoList onDelete={this.handleDelete} todos={this.state.todos} />
        <AddToDo onSubmit={this.handleAdd} />
      </div>
    );
  }
}
 
export default App;
