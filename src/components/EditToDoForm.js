import { useState } from 'react';
import React from 'react';

const EditToDoForm = ({ editTask , todo}) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    editTask(value, todo.id);
    setValue('');
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        type='text'
        value={value}
        className='todo-input'
        placeholder='Update Task'
        onChange={e => setValue(e.target.value)}
      />
      <button type='submit' className='todo-btn'>
        Update Task
      </button>
    </form>
  );
};

export default EditToDoForm;
