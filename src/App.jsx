import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function handleAddTodos(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodoList);
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);  // Сначала устанавливаем значение в инпут
    setTodos(todos.filter((_, todoIndex) => todoIndex !== index));  // Потом удаляем задачу
  }

  return (
    <>
      <TodoInput 
        todoValue={todoValue} 
        setTodoValue={setTodoValue} 
        handleAddTodos={handleAddTodos} 
      />
      <TodoList 
        todos={todos} 
        handleDeleteTodo={handleDeleteTodo} 
        handleEditTodo={handleEditTodo} 
      />
    </>
  );
}

export default App;
