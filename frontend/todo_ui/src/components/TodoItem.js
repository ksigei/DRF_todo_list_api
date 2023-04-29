import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../redux/todosSlice';

const TodoItem = ({ todo }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [completed, setCompleted] = useState(todo.completed);

  const dispatch = useDispatch();

  const handleUpdate = e => {
    e.preventDefault();
    dispatch(updateTodo({ id: todo.id, title, description, completed }));
    setEditing(false);
  };

  if (editing) {
    return (
      <div className="box">
        <form onSubmit={handleUpdate}>
          <div className="field">
            <label className="label">Title:</label>
            <div className="control">
              <input className="input" type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
          </div>
          <div className="field">
            <label className="label">Description:</label>
            <div className="control">
              <textarea className="textarea" value={description} onChange={e => setDescription(e.target.value)} />
            </div>
          </div>
          <div className="field">
            <label className="checkbox">
              <input type="checkbox" checked={completed} onChange={e => setCompleted(e.target.checked)} />
              Completed
            </label>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" type="submit">Save</button>
            </div>
            <div className="control">
              <button className="button is-link is-light" onClick={() => setEditing(false)}>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="box">
      <h3 className={`title is-4 ${completed ? 'has-text-grey-light' : ''}`}>{todo.title}</h3>
      <p className={`subtitle ${completed ? 'has-text-grey-light' : ''}`}>{todo.description}</p>
      <button className="button is-link is-small" onClick={() => setEditing(true)}>Edit</button>
    </div>
  );
};

export { TodoItem };
