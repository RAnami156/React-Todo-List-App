export default function TodoInput({ handleAddTodos, todoValue, setTodoValue }) {
    return (
      <header>
        <input
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
          placeholder="Enter todo..."
        />
        <button
          onClick={() => {
            if (todoValue.trim()) {
              handleAddTodos(todoValue);
              setTodoValue('');
            }
          }}
        >
          Add
        </button>
      </header>
    );
  }
  