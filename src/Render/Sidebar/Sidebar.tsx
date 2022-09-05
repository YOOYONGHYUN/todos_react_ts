import React from "react";
import "./Sidebar.css";
import {
  FaChartBar,
  FaHome,
  FaRegFileAlt,
  FaRegComments,
} from "react-icons/fa";

export default function Sidebar(): JSX.Element {
  return (
    <div className="todo-sidebar">
      <div></div>
      <div className="sidebar-home">
        <FaHome />
        <div>홈</div>
      </div>
      <div className="sidebar-metting">
        <FaRegComments />
        <div>회의</div>
      </div>
      <div className="sidebar-work">
        <FaRegFileAlt />
        <div>업무</div>
      </div>
      <div className="sidebar-statics">
        <FaChartBar />
        <div>통계</div>
      </div>
    </div>
  );
}
