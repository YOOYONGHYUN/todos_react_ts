import React from "react";
import "./Sidebar.css";
import {
  FaChartBar,
  FaHome,
  FaRegFileAlt,
  FaRegComments,
} from "react-icons/fa";

export default function Sidebar(props: {
  handleWork: () => void;
  work: boolean;
}): JSX.Element {
  console.log(props);

  return (
    <div className="todos-sidebar">
      <div className="sidebar-user">
        <div className="sidebar-user-context"></div>
      </div>
      <div className="sidebar-home">
        <FaHome className="sidebar-icon" />
        <div className="sidebar-text">홈</div>
      </div>
      <div className="sidebar-metting">
        <FaRegComments className="sidebar-icon" />

        <div className="sidebar-text">회의</div>
      </div>
      <div
        className={props.work ? "select-sidebar-work" : "sidebar-work"}
        onClick={() => {
          props.handleWork();
        }}
      >
        <div>
          <FaRegFileAlt className="sidebar-icon" />
          <div className="sidebar-text">업무</div>
        </div>
      </div>
      <div className="sidebar-statics">
        <FaChartBar className="sidebar-icon" />
        <div className="sidebar-text">통계</div>
      </div>
    </div>
  );
}
