import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from '../redux/todosSlice';
import { TodoItem } from './TodoItem';
import { NewTodoForm } from './NewTodoForm';

export function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.items);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-half">
          <NewTodoForm />

          <div className="box">
            <ul>
              {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

