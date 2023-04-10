import React from 'react';
import TodoItem from './todoitem';
import "../../styles/todoitem.css";

function TodoList(props) {
  return (
    <div className="todo-list">
      {props.items.map((item, index) => (
        <TodoItem key={index} text={item.text} onDelete={() => props.onDelete(index)} />
      ))}
    </div>
  );
}

export default TodoList;