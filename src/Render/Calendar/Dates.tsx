import React from "react";
import { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import "./Dates.css";

export default function Dates(): JSX.Element {
  const date = new Date();
  const monthArr: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());

  const [monthContainer, setMonthContainer] = useState<number[][]>([]);

  function datesFunction(year: number, month: number) {
    date.setFullYear(year);
    date.setMonth(month);
    console.log(date.getMonth());
    let totalDates: number[] = [];

    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    let prevLastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();

    for (let i = 1; i <= lastDay; i++) {
      totalDates.push(i);
    }

    date.setDate(1);
    for (let i = 1; i <= date.getDay(); i++) {
      totalDates.unshift(prevLastDay);
      prevLastDay--;
    }

    let count: number = 1;
    while (totalDates.length < 42) {
      totalDates.push(count);

      count++;
    }

    let weekContainer = [];
    while (totalDates.length !== 0) {
      weekContainer.push(totalDates.splice(0, 7));
    }

    setMonthContainer(weekContainer);
  }

  useEffect(() => {
    datesFunction(year, month);
  }, [month]);

  //이걸 이렇게 하는 방법밖에 없나...? 아닐텐데 분명...
  //   let week1 = days.slice(0, 7);
  //   let week2 = days.slice(7, 14);
  //   let week3 = days.slice(14, 21);
  //   let week4 = days.slice(21, 28);
  //   let week5 = days.slice(28, 35);
  //   let week6 = days.slice(35);

  //   console.log(week1);
  //   console.log(week2);
  //   console.log(week3);
  //   console.log(week4);
  //   console.log(week5);
  //   console.log(week6);
  //map을 두번? [[],[],[]] 이런식으로 만들고 뿌려주면?

  return (
    <div className="calendar">
      <div className="calendar-head">
        <FaChevronLeft
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (month < 1) {
              setMonth(11);
              setYear(year - 1);
            } else {
              setMonth(month - 1);
            }
          }}
        />
        <div className="calendar-head-text">
          <span>{year}</span>
          <div>{monthArr[month]}</div>
        </div>
        <FaChevronRight
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (month > 10) {
              setMonth(0);
              setYear(year + 1);
            } else {
              setMonth(month + 1);
            }
          }}
        />
      </div>

      <div className="calendar-body">
        {monthContainer.map((week) => (
          <CalendarBody weeks={week} />
        ))}
      </div>
    </div>
  );
}

function CalendarBody(props: any): JSX.Element {
  return (
    <div className="calendar-body-container">
      {props.weeks.map((date: number) => (
        <div className="calendar-body-date">{date}</div>
      ))}
    </div>
  );
}
