import React, { useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [todo, setTodo] = useState({ name: '' });

  async function createTodo() {
    const res = await axios.post('api/todo/', {
      name: 'halloaxios',
    });
    console.log(res);
  }

  async function getTodo() {
    const res = await axios.get('api/todo/28c88f21-0337-4398-85b5-69639cfc9ab8');
    console.log(res.data);
    setTodo(res.data);
  }

  return (
    <div>
      <p onClick={getTodo}>getTodo: {todo.name}</p>
      <p onClick={createTodo}>createTodo</p>
    </div>
  );
};

export default App;
