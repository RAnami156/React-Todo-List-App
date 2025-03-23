import React from "react";

export default function TodoCard({ children, handleDeleteTodo, handleEditTodo, index }) {
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button onClick={() => handleEditTodo(index)}>
          <i className="fa-solid fa-pen-to-square"></i> Edit
        </button>
        <button onClick={() => handleDeleteTodo(index)}>
          <i className="fa-solid fa-trash"></i> Delete
        </button>
      </div>
    </li>
  );
}
