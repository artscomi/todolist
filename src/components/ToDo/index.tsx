import React from "react";

export type Todo = {
  id: string;
  complete: boolean;
  priority: boolean;
  task: string;
};

type Props = {
  todo: Todo;
  handleComplete?: (value: string) => {};
};

const ToDo: React.FC<Props> = ({ todo, handleComplete }) => {
  return (
    <li
      className="list-item list-item--list"
      id={todo.id}
      onClick={() => handleComplete && handleComplete(todo.id)}
    >
      <span
        className={`checkbox ${todo.complete ? "checkbox--checked" : ""}`}
      ></span>
      <span
        className={`list-item__circle ${
          todo.priority ? "list-item__circle--red" : "list-item__circle--blue"
        }`}
      ></span>
      <span
        className={`list-item__label ${
          todo.complete ? "list-item__label--done" : ""
        }`}
      >
        {todo.task}
      </span>
    </li>
  );
};

export default ToDo;
