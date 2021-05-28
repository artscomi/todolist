import Trash from "components/Icon/Trash";
import useMediaQuery from "hooks/useMediaQueries";
import React from "react";
import { rawMq } from "utils/media-queries";
import { ModalContext } from "react-multi-modal";
import ModalDeleteOrComplete from "components/ModalDeleteOrCompleteTask";

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
  const isDesktop = useMediaQuery(rawMq.tabLand);
  const { showModal } = React.useContext(ModalContext);

  const showModalDeleteOrComplete = () => {
    showModal({
      component: ModalDeleteOrComplete,
      modalProps: {
        todo,
        handleComplete,
        handleDelete,
      },
    });
  };

  return (
    <li
      tabIndex={0}
      className="list-item list-item--list"
      onClick={showModalDeleteOrComplete}
    >
      <input
        id="checkbox_id"
        type="checkbox"
        onClick={() => handleComplete && handleComplete(todo.id)}
        className={`checkbox ${todo.complete ? "checkbox--checked" : ""}`}
      />

      <span
        className={`list-item__circle ${
          todo.priority ? "list-item__circle--red" : "list-item__circle--blue"
        }`}
      ></span>
      <label
        htmlFor="checkbox_id"
        className={`list-item__label ${
          todo.complete ? "list-item__label--done" : ""
        }`}
      >
        {todo.task}
      </label>
      {isDesktop && (
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
