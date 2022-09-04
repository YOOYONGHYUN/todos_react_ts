import React, { useState } from "react";
import Dates from "./Dates";
import "./Calendar.css";

export default function Calendar(): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <div className="calendar-container">
      <div className="pickbox">
        <input
          placeholder="달력 펼치기"
          value=""
          readOnly
          onClick={(e) => {
            setOpen(true);
            console.log(e.target);
          }}
        ></input>
      </div>

      {open ? <Dates /> : null}
    </div>
  );
}
