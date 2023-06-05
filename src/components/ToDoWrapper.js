import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import Todo from './Todo';
import EditToDoForm from './EditToDoForm';
import { v4 as uuidv4 } from 'uuid';

const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = todo => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };
  const toggleComplete = id => {
    setTodos(
      todos.map(todo =>
        todo.id == id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id != id));
  };

  const editTodo = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (value, id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, task: value, isEditing: !todo.isEditing }
          : todo
      )
    );
  };

  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done!</h1>
      <ToDoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditToDoForm editTask={editTask} todo={todo} />
        ) : (
          <Todo
            todo={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default ToDoWrapper;
