import "./App.scss";
import Calendar from "./components/Icon/Calendar";
import Charts from "./components/Icon/Charts";
import Checked from "./components/Icon/Checked";
import Dashboard from "./components/Icon/Dashboard";
import Plus from "./components/Icon/Plus";
import Settings from "./components/Icon/Settings";
import Teams from "./components/Icon/Teams";

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

          <div className="list">
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

          <div className="list">
            <p className="list-title">
              <span className="u-margin-right-small">Done</span>
              <span className="counter-circle">4</span>
            </p>

            <ul>
              <li className="list-item list-item--list">
                <span className="checkbox"></span>
                <span className="list-item__circle list-item__circle--red"></span>
                <span className="list-item__label">Replace broken SEO</span>
              </li>

              <li className="list-item list-item--list">
                <span className="checkbox checkbox--checked"></span>
                <span className="list-item__circle list-item__circle--red"></span>
                <span className="list-item__label list-item__label--done">
                  New design system: brainstorming
                </span>
              </li>
            </ul>
          </div>

          <footer className="toolbar">
            <div className="toolbar__item">
              <Dashboard />
              <p>Dashboard</p>
            </div>
            <div className="toolbar__item">
              <Calendar />
              <p>Calendar</p>
            </div>
            <div className="toolbar__item">
              <Teams />
              <p>Teams</p>
            </div>
            <div className="toolbar__item">
              <Charts />
              <p>Charts</p>
            </div>
            <div className="toolbar__item">
              <Settings />
              <p>Settings</p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
