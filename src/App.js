import "./App.scss";
import Plus from "./components/Icon/Plus";
import ToolbarMobile from "./components/ToolbarMobile";
import Sidebar from "./components/Sidebar";
import useMediaQuery from "hooks/useMediaQueries";
import NewTaskDesktop from "components/NewTaskDesktop";
import { useState } from "react";
import ToDoList from "components/ToDoList";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [toDoListCompleted, setToDoListCompleted] = useState([]);
  let isDesktop = useMediaQuery("(min-width: 75rem)");

  const handleComplete = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === id && { ...task, complete: true };
    });

    setToDoList(
      toDoList.filter((todo) => {
        return todo.id !== id;
      })
    );

    setToDoListCompleted(mapped.filter((task) => task.complete === true));
  };

  const addTask = (newTask, highPriority) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      {
        id: toDoList.length + 1,
        task: newTask,
        priority: highPriority,
        complete: false,
      },
    ];

    const copySorted = copy.sort(
      (a, b) => b.priority - a.priority || b.id - a.id
    );
    setToDoList(copySorted);
  };

  return (
    <div className="App">
      <div className="container">
        {!isDesktop && (
          <header className="header">
            <h1>MyTrack</h1>
          </header>
        )}

        <main>
          {isDesktop ? (
            <NewTaskDesktop addTask={addTask} />
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

            <ToDoList toDoList={toDoList} handleComplete={handleComplete} />
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
