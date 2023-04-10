import React, { useContext, useState} from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import TodoList from '../component/todolist';





export const Home = () => {
	const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleNewTodo = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo }]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-app" style={{backgroundColor: '#FFC0CB'}}>
      <h1 style={{color: 'white'}}>My Todo List</h1>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Enter new todo" value={newTodo} onChange={handleNewTodo} onKeyPress={handleKeyPress} />
        <button className="add-button" onClick={handleAddTodo}>Add Todo</button>
      </div>
      <TodoList items={todos} onDelete={handleDeleteTodo} />
    </div>
  );

};
