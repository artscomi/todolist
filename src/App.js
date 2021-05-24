import "./App.scss";
import Plus from "./components/Icon/Plus";
import ToolbarMobile from "./components/ToolbarMobile";
import Sidebar from "./components/Sidebar";
import useMediaQuery from "hooks/useMediaQueries";
import NewTaskDesktop from 'components/NewTaskDesktop'

function App() {
  let isDesktop = useMediaQuery("(min-width: 75rem)");

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
           
            <NewTaskDesktop />
          ) : (
            <div className="list-item list-item--add">
              <span className="u-margin-right-small">New task</span>
              <Plus />
            </div>
          )}

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

          {isDesktop ? <Sidebar /> : <ToolbarMobile />}
        </main>
      </div>
    </div>
  );
}

export default App;
