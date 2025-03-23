import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList({ todos, handleEditTodo, handleDeleteTodo }) {
  return (
    <ul className="main">
      {todos.map((todo, index) => (
        <TodoCard 
          key={index} 
          index={index} 
          handleEditTodo={handleEditTodo} 
          handleDeleteTodo={handleDeleteTodo}
        >
          <p>{todo}</p>
        </TodoCard>
      ))}
    </ul>
  );
}
