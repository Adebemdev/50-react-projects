import { useState } from 'react';

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = todo.length + 1;
    setTodo((prev) => [
      ...prev,
      {
        id: id,
        task: input,
      },
    ]);
    setInput('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your items"
          value={input}
          onChange={handleChange}
        />
        <button type="submit">Add items</button>
      </form>

      <ul>
        {todo.map(({ task }) => (
          <div key={Math.random()}>
            <h1>{task}</h1>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
