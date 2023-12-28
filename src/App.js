import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  const addTodo = () => {
    if (inputText.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputText }]);
      setInputText('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-4" align="center">Todo List</h1>
      <div className="input-container" align="center">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="border p-2 flex-grow" align="center"
        />
        <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Item
        </button>
      </div>
      
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
};

export default App;
