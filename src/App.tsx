import React from "react";
import TodoList from "./Render/Todo/TodoList";
import Calendar from "./Render/Calendar/Calendar";
import "./App.css";
import Weather from "./Render/Weather/Weather";

function App(): JSX.Element {
  return (
    <div className="todo-project">
      <TodoList />
      <div className="todo-project-side">
        <Weather />
        <Calendar />
      </div>
    </div>
  );
}

export default App;
