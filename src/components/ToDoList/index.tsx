import React from "react";
import ToDo, { Todo } from "components/ToDo";

type Props = {
  toDoList: Array<Todo>;
  handleComplete?: (value: string) => {};
};

const ToDoList: React.FC<Props> = ({ toDoList, handleComplete }) => {
  return (
    <ul>
      {toDoList.map((todo, index) => {
        return <ToDo key={index} todo={todo} handleComplete={handleComplete} />;
      })}
    </ul>
  );
};

export default ToDoList;
