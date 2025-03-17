import { useState } from 'react';
import './style.css';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const onHandleSubmit = (e) => {
    e.preventDefault();

    setTodos((todos) => {
      return todos.concat({
        text: inputValue,
        id: Math.floor(Math.random() * 10),
      });
    });
    setInputValue('');
  };

  const onRemoveTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id !== id));

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter new Todos"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" onClick={onHandleSubmit}>
        Submit
      </button>

      <ul className="todos-list">
        {todos.map(({ text, id }) => (
          <li className="todo" key={id}>
            <span>{text}</span>
            <button onClick={() => onRemoveTodo(id)} className="close">
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
