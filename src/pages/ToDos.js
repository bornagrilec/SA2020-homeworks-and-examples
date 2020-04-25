import React, { useState, useEffect } from 'react';
import { getTodos } from '../services/todos';

const ToDos = () => {
    const [todos, setTodos] = useState('');

    useEffect(() => {
        getTodos().then(todos => setTodos(todos));
    });

    return (
        <ul>
            {todos ? todos.map(todo => <li>{todo.title}</li>) : <div>Loading...</div>}
        </ul>
    );
}

export default ToDos;