import { Todo } from "components/ToDo";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type Props = {
  isOpen: boolean;
  hideModal: VoidFunction;
  todo: Todo;
};

const ModalDeleteOrComplete: React.FC<Props> = ({ isOpen, todo }) => {
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
            <div>Task</div>
            <div>priority</div>
            <div>{todo.task}</div>
            <button>Complete</button>
            <button>Delete</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalDeleteOrComplete;
