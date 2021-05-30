import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import NewTaskInput from "components/NewTaskInput";

type Props = {
  isOpen: boolean;
  hideModal: VoidFunction;
  addNewTask: (newTask: string, isHighPriority: boolean) => void;
};

const ModalNewTask: React.FC<Props> = ({ isOpen, hideModal, addNewTask }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-overlay"
        >
          <div className="modal" role="dialog" aria-labelledby="my-modal-label">
            <NewTaskInput addNewTask={addNewTask} hideModal={hideModal} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalNewTask;
