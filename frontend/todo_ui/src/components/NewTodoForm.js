import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../redux/todosSlice';

export function NewTodoForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createTodo({ title, description, completed }));
    setTitle('');
    setDescription('');
    setCompleted(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <label>
        Completed:
        <input type="checkbox" checked={completed} onChange={e => setCompleted(e.target.checked)} />
      </label>
      <button type="submit">Add Todo</button>
    </form>
  );
}
