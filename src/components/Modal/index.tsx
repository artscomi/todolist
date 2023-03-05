import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type Props = {
  onClose: VoidFunction;
  isOpen: boolean;
//   addNewTask: (newTask: string, isHighPriority: boolean) => void;
  children: React.ReactNode;
};

const ModalNewTask: React.FC<Props> = ({ isOpen, children, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-overlay"
          onClick={onClose}
        >
          <div
            className="modal modal--top"
            role="dialog"
            aria-labelledby="my-modal-label"
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalNewTask;
