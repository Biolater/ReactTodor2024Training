import  { useState } from "react";
type InputValue = string;
const App = () => {
  const [value, setValue] = useState<InputValue>("");
  const [localTodos, setLocalTodos] = useState<string[]>(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const handleTodo = (todo: string) => {
    const newTodos = [...localTodos, todo];
    setLocalTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setValue("");
  };

  const handleInput = (value: string) => {
    setValue(value);
  }

  return (
    <div>
      <input onChange={(e) => handleInput(e.target.value)} value={value} type="text" />
      <button onClick={() => handleTodo(value)}>add</button>
      <ul>
        {
          localTodos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default App;