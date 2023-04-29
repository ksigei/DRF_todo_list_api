import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../redux/todosSlice';

const NewTodoForm = () => {
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
    <div className="box">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Title:</label>
          <div className="control">
            <input className="input" type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} />
          </div>
        </div>
        <div className="field">
          <label className="label">Description:</label>
          <div className="control">
            <textarea className="textarea" placeholder="Enter description" value={description} onChange={e => setDescription(e.target.value)} />
          </div>
        </div>
        <div className="field">
          <label className="checkbox">
            <input type="checkbox" checked={completed} onChange={e => setCompleted(e.target.checked)} />
            Completed
          </label>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-link" type="submit">Create</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export { NewTodoForm };

