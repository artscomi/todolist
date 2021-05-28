import { Todo } from "components/ToDo";

const PriorityCircle: React.FC<{ task: Todo }> = ({ task }) => (
  <span
    className={`priority-circle ${
      task.priority ? "priority-circle--red" : "priority-circle--blue"
    }`}
  ></span>
);
export default PriorityCircle;
