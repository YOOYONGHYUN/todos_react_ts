import React from "react";
import { useState } from "react";

export default function TodoList(): JSX.Element {
  let parsedTodos: string[] = JSON.parse(
    localStorage.getItem("todos") as string
  );

  const [change, setChange] = useState("");
  const [value, setValue] = useState<string[]>(parsedTodos);

  localStorage.setItem("todos", JSON.stringify(value));

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setChange(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setValue([...value, change]);
    setChange("");
  }

  console.log(value);

  return (
    <div className="todos">
      <form className="todos-head" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={change} />
        <button>추가</button>
      </form>
      <div className="todos-body">
        <ul className="todos-body-list">
          {value.map((a, index) => (
            <>
              <li key={index}>{a}</li>
              <button
                onClick={() => {
                  let filteredValue = value.filter((a) => a !== value[index]);
                  setValue(filteredValue);
                }}
              >
                삭제
              </button>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}
