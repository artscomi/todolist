import Trash from "components/Icon/Trash";
import useMediaQuery from "hooks/useMediaQueries";
import React, { useContext } from "react";
import { rawMq } from "utils/media-queries";
import ModalDeleteOrComplete from "components/ModalDeleteOrCompleteTask";
import PriorityCircle from "components/PriorityCircle";
import { ModalContext } from "context/ModalContext";

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
  const handleShowModal = () => {
    showModal(
      <ModalDeleteOrComplete
        todo={todo}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
      />
    );
  };
  const isDesktop = useMediaQuery(rawMq.tabLand);
  const { showModal } = useContext(ModalContext);
  return (
    <li
      tabIndex={0}
      className="list-item list-item--list"
      onClick={() => !isDesktop && handleShowModal()}
      onKeyDown={(e) => e.key === "Enter" && !isDesktop && handleShowModal()}
    >
      <input
        id={`checkbox_${todo.id}`}
        type="checkbox"
        onClick={() => {
          isDesktop && handleComplete && handleComplete(todo.id);
        }}
        className={`checkbox ${todo.complete ? "checkbox--checked" : ""}`}
      />

      <PriorityCircle task={todo} />

      <label
        htmlFor={`checkbox_${todo.id}`}
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
          onClick={() => {
            handleDelete && handleDelete(todo.id);
            document.activeElement instanceof HTMLElement &&
              document.activeElement.blur();
          }}
          aria-label="Delete task"
          className="list-item__trash"
        >
          <Trash />
        </div>
      )}
    </li>
  );
};

export default ToDo;
