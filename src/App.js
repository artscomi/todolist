import "./App.scss";
import Plus from "./components/Icon/Plus";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>MyTrack</h1>
        </header>
        <main>
          <div className="list-item list-item--add">
            <span className="u-margin-right-small">New task</span>
            <Plus />
          </div>

          <div>
            <p className="list-title">
              <span className="u-margin-right-small">In progress</span>
              <span className="counter-circle">5</span>
            </p>

            <ul>
              <li className="list-item list-item--list">
                <span className="checkbox"></span>
                <span className="list-item__circle list-item__circle--red"></span>
                <span className="list-item__label">
                  New design system: brainstorming
                </span>
              </li>

              <li className="list-item list-item--list">
                <span className="checkbox"></span>
                <span className="list-item__circle list-item__circle--blue"></span>
                <span className="list-item__label">
                  New design system: brainstorming
                </span>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
