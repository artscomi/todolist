import React, { useContext } from "react";
import NewTaskInput from "components/NewTaskInput";
import { ModalContext } from "context/modalContext";

type Props = {
  addNewTask: (newTask: string, isHighPriority: boolean) => void;
};

const ModalNewTask: React.FC<Props> = ({ addNewTask }) => {
  const { hideModal } = useContext(ModalContext);
  return <NewTaskInput addNewTask={addNewTask} hideModal={hideModal} />;
};

export default ModalNewTask;
