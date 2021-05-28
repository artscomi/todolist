import Plus from "components/Icon/Plus";
import Trash from "components/Icon/Trash";
import PriorityCircle from "components/PriorityCircle";
import { Todo } from "components/ToDo";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type Props = {
  isOpen: boolean;
  hideModal: VoidFunction;
  todo: Todo;
  handleComplete?: (id: string) => void;
  handleDelete?: (id: string) => void;
};

const ModalDeleteOrComplete: React.FC<Props> = ({
  isOpen,
  hideModal,
  todo,
  handleComplete,
  handleDelete,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="overlay"
        >
          <div className="modal">
            <div className="new-task__header">
              <div className="flex flex-align-center">
                <PriorityCircle task={todo} />
                <label className="new-task__label">Task</label>
              </div>
              <div onClick={hideModal}>
                <Plus className="icon-rotate" />
              </div>
            </div>

            <div className="new-task__input-wrapper">
              <div>{todo.priority}</div>
              <p className="new-task__name">{todo.task}</p>
              <div className="new-task__tools">
                <button
                  onClick={() => handleDelete && handleDelete(todo.id)}
                  className="button button--icon"
                >
                  <Trash />
                </button>
                <button
                  onClick={() => handleComplete && handleComplete(todo.id)}
                  className="button button--complete"
                >
                  Complete
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalDeleteOrComplete;
