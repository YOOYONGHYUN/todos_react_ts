import React from "react";
import { useState, useEffect } from "react";
import "./Todo.css";
import TodoDetail from "./TodoDeatil";

export default function TodoList(): JSX.Element {
  type todo = { todo: string; id: number };

  let parsedTodos: todo[] = JSON.parse(localStorage.getItem("todos") as string);

  const [show, setShow] = useState(false);

  const [change, setChange] = useState("");

  //parsedTodos가 있으면 value의 초기값을 parsedTodos로 비어있으면 그냥 빈 배열로 설정.
  let item: todo[];
  parsedTodos ? (item = parsedTodos) : (item = []);
  const [value, setValue] = useState<todo[]>(item);

  const [id, setId] = useState(0);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setChange(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setValue([...value, { todo: change, id: Date.now() }]);
    setChange("");
  }

  localStorage.setItem("todos", JSON.stringify(value));

  useEffect(() => {
    if (value.length !== 0) setShow(true);
    else setShow(false);
  }, [value]);

  //tododetail component 열고 닫기 위한 상태 state.
  const [detailState, setDetailState] = useState(false);

  return (
    <>
      <div className="todos">
        <form className="todos-head" onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={change} />
          <button>추가</button>
        </form>

        {show ? (
          <div className="todos-body">
            {parsedTodos.map((a: todo) => (
              <div key={a.id} className="todos-body-context">
                <div
                  onClick={() => {
                    setId(a.id);
                    setDetailState(true);
                  }}
                >
                  {a.todo}
                </div>
                <button
                  onClick={() => {
                    let id: number = a.id;
                    let filteredValue = parsedTodos.filter(
                      (a: todo) => a.id !== id
                    );
                    setValue(filteredValue);
                  }}
                >
                  삭제
                </button>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      <TodoDetail id={id} detailState={detailState} />
    </>
  );
}
