import React from 'react';
import "../../styles/todoitem.css";

function TodoItem(props) {
    return (
        <div className="todo-item">
          <span className="todo-text">{props.text}</span>
          <button className="delete-button" onClick={props.onDelete}>Delete</button>
        </div>
      );
}

export default TodoItem;