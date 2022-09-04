import React from "react";
import {
  FaSun,
  FaCloudSun,
  FaCloud,
  FaCloudMeatball,
  FaCloudSunRain,
  FaCloudShowersHeavy,
  FaPooStorm,
  FaSnowflake,
  FaSmog,
} from "react-icons/fa";

export default function ShowWeather(iconIdx: { iconIdx: string }) {
  console.log(iconIdx);
  let idx = iconIdx.iconIdx;

  return (
    <>
      {(function () {
        if (idx === "01") {
          return <FaSun />;
        } else if (idx === "02") {
          return <FaCloudSun />;
        } else if (idx === "03") {
          return <FaCloud />;
        } else if (idx === "04") {
          return <FaCloudMeatball />;
        } else if (idx === "09") {
          return <FaCloudSunRain />;
        } else if (idx === "10") {
          return <FaCloudShowersHeavy />;
        } else if (idx === "11") {
          return <FaPooStorm />;
        } else if (idx === "13") {
          return <FaSnowflake />;
        } else if (idx === "50") {
          return <FaSmog />;
        }
      })()}
    </>
  );
}
