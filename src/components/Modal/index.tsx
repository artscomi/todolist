import { ModalContext } from "context/ModalContext";
import { AnimatePresence, motion } from "framer-motion";
import React, { useContext } from "react";

type Props = {
  children: React.ReactNode;
};

const ModalNewTask: React.FC<Props> = ({ children }) => {
  const { isModalOpen, hideModal } = useContext(ModalContext);
  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-overlay"
          onClick={hideModal}
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
