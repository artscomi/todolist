import React, { useContext } from "react";
import NewTaskForm from "components/NewTaskForm";
import { ModalContext } from "context/ModalContext";

type Props = {
  addNewTask: (newTask: string, isHighPriority: boolean) => void;
};

const ModalNewTask: React.FC<Props> = ({ addNewTask }) => {
  const { hideModal } = useContext(ModalContext);
  return <NewTaskForm addNewTask={addNewTask} hideModal={hideModal} />;
};

export default ModalNewTask;
