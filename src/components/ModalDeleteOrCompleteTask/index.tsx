import Plus from "components/Icon/Plus";
import Trash from "components/Icon/Trash";
import PriorityCircle from "components/PriorityCircle";
import { Todo } from "components/ToDo";
import { ModalContext } from "context/ModalContext";
import React, { useContext } from "react";

type Props = {
  todo: Todo;
  handleComplete?: (id: string) => void;
  handleDelete?: (id: string) => void;
};

const ModalDeleteOrComplete: React.FC<Props> = ({
  todo,
  handleComplete,
  handleDelete,
}) => {
  const { hideModal } = useContext(ModalContext);

  return (
    <>
      <div className="new-task__header">
        <div className="flex flex-align-center">
          <PriorityCircle task={todo} />
          <h2 id="my-modal-label" className="new-task__label">
            Task
          </h2>
        </div>
        <button aria-label="Close modal" onClick={hideModal}>
          <Plus className="icon-rotate" />
        </button>
      </div>

      <div className="new-task__input-wrapper">
        <p className="new-task__name">{todo.task}</p>
        <div className="new-task__tools">
          <button
            onClick={() => handleDelete && handleDelete(todo.id)}
            className="button button--icon"
            aria-label="Delete task"
          >
            <Trash />
          </button>
          {!todo.complete && (
            <button
              onClick={() => handleComplete && handleComplete(todo.id)}
              className="button button--complete"
            >
              Complete
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ModalDeleteOrComplete;
