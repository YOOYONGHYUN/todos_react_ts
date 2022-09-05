import React, { useState } from "react";
import TodoList from "./Render/Todo/TodoList";
import Calendar from "./Render/Calendar/Calendar";
import "./App.css";
import Weather from "./Render/Weather/Weather";
import Sidebar from "./Render/Sidebar/Sidebar";

function App(): JSX.Element {
  const [work, setWork] = useState(false);

  console.log(work);

  function handleWork() {
    if (work === true) setWork(false);
    else setWork(true);
  }

  return (
    <div style={{ display: "flex" }}>
      <Sidebar handleWork={handleWork} work={work} />
      {work ? (
        <div className="todo-project">
          <TodoList />
          <div className="todo-project-side">
            <Weather />
            <Calendar />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
