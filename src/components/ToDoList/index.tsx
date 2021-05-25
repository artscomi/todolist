import React from "react";
import ToDo, { Todo } from "components/ToDo";

type Props = {
  toDoList: Array<Todo>;
  handleComplete?: (id: string) => void;
  handleDelete?: (id: string) => void;
};

const ToDoList: React.FC<Props> = ({
  toDoList,
  handleComplete,
  handleDelete,
}) => {
  return (
    <ul>
      {toDoList.map((todo, index) => {
        return (
          <ToDo
            key={index}
            todo={todo}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
};

export default ToDoList;
