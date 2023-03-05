import "./App.scss";
import Plus from "./components/Icon/Plus";
import ToolbarMobile from "./components/ToolbarMobile";
import Sidebar from "./components/Sidebar";
import useMediaQuery from "hooks/useMediaQueries";
import useKeyboardOrMouseEvent from "hooks/useKeyboardOrMouseEvent";
import NewTaskForm from "components/NewTaskForm";
import { useContext, useRef, useState } from "react";
import ToDoList from "components/ToDoList";
import { Todo } from "components/ToDo";
import ModalNewTask from "components/ModalNewTask";
import { rawMq } from "utils/media-queries";
import { ModalContext } from "context/ModalContext";

const App = () => {
  const [toDoList, setToDoList] = useState<Array<Todo>>([]);
  const isDesktop = useMediaQuery(rawMq.tabLand);
  const appContainer = useRef<HTMLDivElement>(null);
  const toDoListInProgress = toDoList.filter((task: Todo) => !task.complete);
  const toDoListCompleted = toDoList.filter((task: Todo) => task.complete);
  useKeyboardOrMouseEvent(appContainer);
  const { hideModal, showModal } = useContext(ModalContext);

  const addNewTask = (newTask: string, highPriority: boolean) => {
    const toDoListCopy: Array<Todo> = [
      ...toDoList,
      {
        id: (toDoList.length + 1).toString(),
        task: newTask,
        priority: highPriority,
        complete: false,
      },
    ];

    const toDoListCopySorted: Array<Todo> = toDoListCopy
      .sort((a, b) => (a.id > b.id ? -1 : 0))
      .sort((a, b) => (a.priority && !b.priority ? -1 : 0));
    setToDoList(toDoListCopySorted);
  };

  const handleComplete = (id: string) => {
    const toDoListCompletedCopy: Array<Todo> = toDoList.map((task: Todo) => {
      if (task.id === id) {
        return { ...task, complete: true };
      }

      return task;
    });

    setToDoList(toDoListCompletedCopy);
    !isDesktop && hideModal();
  };

  const handleDelete = (id: string) => {
    setToDoList(
      toDoList.filter((todo: Todo) => {
        return todo.id !== id;
      })
    );
    !isDesktop && hideModal();
  };

  return (
    <div className="App" ref={appContainer}>
      <main className="container">
        {!isDesktop && (
          <header className="header">
            <h1>MyTrack</h1>
          </header>
        )}

        {isDesktop ? (
          <NewTaskForm addNewTask={addNewTask} />
        ) : (
          <button
            onClick={() => showModal(<ModalNewTask addNewTask={addNewTask} />)}
            className="list-item list-item--add"
          >
            <span className="u-margin-right-small">New task</span>
            <Plus />
          </button>
        )}

        <div className="list">
          <p className="list-title">
            <span className="u-margin-right-small">In progress</span>
            <span className="counter-circle">{toDoListInProgress.length}</span>
          </p>

          <ToDoList
            toDoList={toDoListInProgress}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
          />
        </div>

        <div className="list">
          <p className="list-title">
            <span className="u-margin-right-small">Done</span>
            <span className="counter-circle">{toDoListCompleted.length}</span>
          </p>

          <ToDoList toDoList={toDoListCompleted} handleDelete={handleDelete} />
        </div>

        {isDesktop ? (
          <Sidebar
            toDoListLength={toDoList.length}
            toDoListCompletedLength={toDoListCompleted.length}
          />
        ) : (
          <ToolbarMobile />
        )}
      </main>
    </div>
  );
};

export default App;
