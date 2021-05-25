import "./App.scss";
import Plus from "./components/Icon/Plus";
import ToolbarMobile from "./components/ToolbarMobile";
import Sidebar from "./components/Sidebar";
import useMediaQuery from "hooks/useMediaQueries";
import NewTaskDesktop from "components/NewTaskDesktop";
import { useEffect, useRef, useState } from "react";
import ToDoList from "components/ToDoList";
import { Todo } from "components/ToDo";

function App() {
  const [toDoList, setToDoList] = useState<Array<any>>([]);
  const [toDoListCompleted, setToDoListCompleted] = useState<Array<any>>([]);
  let isDesktop = useMediaQuery("(min-width: 75rem)");
  const appContainer = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: any) => {
    if (appContainer.current) {
      appContainer.current.classList.add("mousedown");
    }
  };
  const handleKeyDown = (e: any) => {
    if (appContainer.current) {
      if (e.key === "Enter" || e.key === "Tab") {
        appContainer.current.classList.remove("mousedown");
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const addNewTask = (newTask: string, highPriority: boolean) => {
    let toDoListCopy: Array<any> = [
      ...toDoList,
      {
        id: toDoList.length + 1,
        task: newTask,
        priority: highPriority,
        complete: false,
      },
    ];

    const toDoListCopySorted: Array<Todo> = toDoListCopy.sort(
      (a, b) => b.priority - a.priority || b.id - a.id
    );
    setToDoList(toDoListCopySorted);
  };

  const handleComplete = (id: string) => {
    // const mapped = toDoList.map((task: Todo) => {
    //   return task.id === id && { ...task, complete: true };
    // });

    handleDelete(id);

    setToDoListCompleted([]);
  };

  const handleDelete = (id: string) => {
    setToDoList(
      toDoList.filter((todo: any) => {
        return todo.id !== id;
      })
    );
  };

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
            <NewTaskDesktop addNewTask={addNewTask} />
          ) : (
            <div className="list-item list-item--add">
              <span className="u-margin-right-small">New task</span>
              <Plus />
            </div>
          )}

          <div className="list">
            <p className="list-title">
              <span className="u-margin-right-small">In progress</span>
              <span className="counter-circle">{toDoList.length}</span>
            </p>

            <ToDoList
              toDoList={toDoList}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
            />
          </div>

          <div className="list">
            <p className="list-title">
              <span className="u-margin-right-small">Done</span>
              <span className="counter-circle">{toDoListCompleted.length}</span>
            </p>

            <ToDoList toDoList={toDoListCompleted} />
          </div>

          {isDesktop ? <Sidebar /> : <ToolbarMobile />}
        </main>
      </div>
    </div>
  );
}

export default App;
