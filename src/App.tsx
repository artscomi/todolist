import "./App.scss";
import Plus from "./components/Icon/Plus";
import ToolbarMobile from "./components/ToolbarMobile";
import Sidebar from "./components/Sidebar";
import useMediaQuery from "hooks/useMediaQueries";
import NewTaskInput from "components/NewTaskInput";
import { useEffect, useRef, useState } from "react";
import ToDoList from "components/ToDoList";
import { Todo } from "components/ToDo";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [toDoList, setToDoList] = useState<Array<Todo>>([]);
  const isDesktop = useMediaQuery("(min-width: 56.25em)");
  const appContainer = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toDoListInProgess = toDoList.filter((task: Todo) => !task.complete);
  const toDoListCompleted = toDoList.filter((task: Todo) => task.complete);

  const handleMouseDown = () => {
    if (appContainer.current) {
      appContainer.current.classList.add("mousedown");
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (appContainer.current) {
      if (e.key === "Enter" || e.key === "Tab") {
        appContainer.current.classList.remove("mousedown");
      }
    }
  };

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
  };

  const handleDelete = (id: string) => {
    setToDoList(
      toDoList.filter((todo: Todo) => {
        return todo.id !== id;
      })
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="App" ref={appContainer}>
      <div className="container">
        {!isDesktop && (
          <header className="header">
            <h1>MyTrack</h1>
          </header>
        )}

        <main>
          {isDesktop ? (
            <NewTaskInput addNewTask={addNewTask} />
          ) : (
            <div onClick={openModal} className="list-item list-item--add">
              <span className="u-margin-right-small">New task</span>
              <Plus />
            </div>
          )}

          <div className="list">
            <p className="list-title">
              <span className="u-margin-right-small">In progress</span>
              <span className="counter-circle">{toDoListInProgess.length}</span>
            </p>

            <ToDoList
              toDoList={toDoListInProgess}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
            />
          </div>

          <div className="list">
            <p className="list-title">
              <span className="u-margin-right-small">Done</span>
              <span className="counter-circle">{toDoListCompleted.length}</span>
            </p>

            <ToDoList toDoList={toDoListCompleted} handleDelete={handleDelete}/>
          </div>

          {isDesktop ? <Sidebar /> : <ToolbarMobile />}
          <AnimatePresence>
            {isModalOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="overlay"
              >
                <div className="modal">
                  <NewTaskInput
                    addNewTask={addNewTask}
                    closeModal={closeModal}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default App;
