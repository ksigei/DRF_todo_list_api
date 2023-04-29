import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from '../redux/todosSlice';
import { NewTodoForm } from './NewTodoForm';

export function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.items);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      <NewTodoForm />
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title} ({todo.completed ? 'completed' : 'not completed'})</li>
        ))}
      </ul>
    </div>
  );
}
