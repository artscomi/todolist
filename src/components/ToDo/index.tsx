import Trash from "components/Icon/Trash";
import React from "react";

export type Todo = {
  id: string;
  complete: boolean;
  priority: boolean;
  task: string;
};

type Props = {
  todo: Todo;
  handleComplete?: (id: string) => void;
  handleDelete?: (id: string) => void;
};

const ToDo: React.FC<Props> = ({ todo, handleComplete, handleDelete }) => {
  

  return (
    <li className="list-item list-item--list">
      <span
        onClick={() => handleComplete && handleComplete(todo.id)}
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
      {!todo.complete && (
        <div
          tabIndex={0}
          role="button"
          onKeyDown={(e) => {
            e.key === "Enter" && handleDelete && handleDelete(todo.id);
          }}
          onClick={() => handleDelete && handleDelete(todo.id)}
          className="list-item__trash"
        >
          <Trash />
        </div>
      )}
    </li>
  );
};

export default ToDo;
