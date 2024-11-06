import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function NewTodoForm({ addTodo }) {
  const [task, setTask] = useState("");

  const handleChange = (evt) => {
    setTask(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo({ task, id: uuid() });
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New Todo"
        value={task}
        onChange={handleChange}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default NewTodoForm;
